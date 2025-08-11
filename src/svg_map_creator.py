import geopandas as gpd
import pandas as pd
import shapely as shp
from xml.dom import minidom
import sys
sys.stdout.reconfigure(encoding='utf-8') # type: ignore


def overlaps(bounds_1, bounds_2) -> bool:
    if bounds_1[0] > bounds_2[2] or bounds_2[0] > bounds_1[2]:
        return False
    if bounds_1[1] > bounds_2[3] or bounds_2[1] > bounds_1[3]:
        return False
    return True

def join_bounds(bounds, bounds_other):
    return (
        min(bounds[0], bounds_other[0]),
        min(bounds[1], bounds_other[1]),
        max(bounds[2], bounds_other[2]),
        max(bounds[3], bounds_other[3])
    )
    
def get_bounds(df: pd.DataFrame) -> tuple[float, float, float, float]:
    first_row = df.iloc[0]
    bounds = first_row["geometry"].bounds
    for _, row in df.iterrows():
        polygon: shp.MultiPolygon = row["geometry"]
        bounds = join_bounds(bounds, polygon.bounds)
    return bounds
        
    
    
def form_groups(df: pd.DataFrame, area_threshold: float) -> dict[tuple, list]:
    groups: dict[tuple, list] = {}
    for _, row in df.iterrows():
        name = row["name"]
        polygon: shp.MultiPolygon = row["geometry"]
        if polygon.area >= area_threshold:
            continue
        for bounds, group in groups.items():
            if not overlaps(bounds, polygon.bounds):
                continue
            new_bounds = join_bounds(bounds, polygon.bounds)
            new_group = group + [name]
            del groups[bounds]
            groups[new_bounds] = new_group
            break
        else:
            groups[polygon.bounds] = [name]
    while True:
        n = len(groups)
        for bounds, group in groups.items():
            for bounds_other, group_other in groups.items():
                if bounds == bounds_other or not overlaps(bounds, bounds_other):
                    continue
                new_bounds = join_bounds(bounds, bounds_other)
                del groups[bounds]
                del groups[bounds_other]
                groups[new_bounds] = group + group_other
                break
            else:
                continue
            break
        if len(groups) == n:
            break
    return groups

def parse_shape(f: str, target_dimensions: tuple[float, float], area_threshold: float):
    shape = gpd.read_file(f)
    df = shape.groupby("ED_NAMEE")["geometry"].apply(lambda g: shp.MultiPolygon(list(g))).reset_index()
    df["name"] = df["ED_NAMEE"].apply(lambda s: s.replace("’", "'").replace("—", "--"))
    df = df[["name", "geometry"]]
    all_bounds = get_bounds(df)
    x = all_bounds[0]
    y = all_bounds[1]
    w = all_bounds[2] - all_bounds[0]
    h = all_bounds[3] - all_bounds[1]
    size_ratio = max(w / target_dimensions[0], h / target_dimensions[1])
    df["geometry"] = df["geometry"].apply(lambda g: shp.transform(g, lambda p: ((0, h) + (1, -1) * (p - (x, y))) / size_ratio))
    return df
    

def to_svg(fpath: str, df: pd.DataFrame, size=None):
    if size is None:
        bounds = get_bounds(df)
        size = (bounds[2] - bounds[0], bounds[3] - bounds[1])
    doc = minidom.Document()
    svg = doc.createElement("svg")
    svg.setAttribute("version", "1.2")
    svg.setAttribute("width", str(size[0]))
    svg.setAttribute("height", str(size[1]))
    svg.setAttribute("viewbox", "0 0 " + str(size[0]) + " " + str(size[1]))
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    for _, row in df.iterrows():
        geometry: shp.MultiPolygon = row["geometry"]
        # element = doc.createElement("path")
        # element.setAttribute("name", row["name"])
        # element.setAttribute("d", geometry.svg())
        dom = minidom.parseString(geometry.svg())
        svg.appendChild(dom.firstChild)
    doc.appendChild(svg)
    with open(fpath, "w", encoding="utf-8") as f:
        doc.writexml(f, encoding="utf-8", addindent=" "*4, newl="\n", standalone=True)
    
    
if __name__ == "__main__":
    df = parse_shape("../2025Canada/SHP/FED_CA_2025_EN.shp", (722.55, 400.133), 300_000_000)
    to_svg("../2025Canada/election_map_generated.svg", df)
    