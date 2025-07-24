from xml.dom import minidom
import os
from svg_compress import *

def matching_inset(path_section):
    for inset in insets:
        for point in path_section:
            if inset[0][0] < point[0] < inset[0][2] and inset[0][1] < point[1] < inset[0][3]:
                return inset
    return None

def transform_path(d: str) -> str:
    new_path = svg.Path()
    try:
        sections, _ = parse_path(d, strict=False)
    except TypeError:
        return d
    for section in sections:
        path_section = list(section)
        inset = matching_inset(path_section)
        new_section = []
        if inset is None:
            inset = default
        for point in path_section:
            x = inset[0][0] + ((point[0] - inset[0][0]) * inset[2]) + inset[1][0]
            y = inset[0][1] + ((point[1] - inset[0][1]) * inset[2]) + inset[1][1]
            new_section.append((x, y))
        append_section_to_path(new_path, new_section)
    return new_path.d()

def transform_paths(paths: list[minidom.Element]):
    for path in paths:
        d = transform_path(path.getAttribute("d"))
        path.setAttribute("d", d)

def svg_rearrange(f_in: str, f_out: str | None = None, new_size=None):
    doc = minidom.parse(f_in)
    paths = doc.getElementsByTagName("path")
    transform_paths(paths)
    if new_size is not None:
        svg = doc.getElementsByTagName("svg")[0]
        svg.setAttribute("width", str(new_size[0]))
        svg.setAttribute("height", str(new_size[1]))
        svg.setAttribute("viewbox", "0 0 " + str(new_size[0]) + " " + str(new_size[1]))
    groups = doc.getElementsByTagName("g")
    legend = find_element(groups, "layer4")
    if legend is not None and legend.parentNode is not None:
        legend.parentNode.removeChild(legend)
    insets = find_element(groups, "layer1")
    if insets is not None and insets.parentNode is not None:
        insets.parentNode.removeChild(insets)
    if f_out is None:
        fname, ext = os.path.splitext(f_in)
        f_out = fname + "_rearranged" + ext
    with open(f_out, "w", encoding="utf-8") as f:
        doc.writexml(f, encoding="utf-8", addindent=" "*4, newl="\n", standalone=False)
        
def find_element(elements: list[minidom.Element], id: str):
    for element in elements:
        if element.getAttribute("id") == id:
            return element


if __name__ == "__main__":
    size = (2550, 1900)
    target = (722.55, 400.133)
    w = target[0] / target[1] * size[1]
    default = ((0, 0, size[0], size[1]), (0, 0), 1)
    insets = [
        [[0, 1400, 390, 1650], [-500, -400], 1.5],          # Vancouver
        [[0, 1650, 200, 1900], [-400, -200], 1.5],          # Victoria
        [[200, 1650, 390, 1900], [-330, -250], 2],          # Calgary
        [[390, 1700, 550, 1900], [-130, -200], 2],          # Edmonton
        [[390, 1570, 550, 1700], [180, -20], 1.2],          # Saskatoon
        [[550, 1570, 710, 1700], [20, 130], 1.2],           # Regina
        [[550, 1700, 710, 1900], [220, -180], 2],           # Winnipeg
        [[710, 1620, 850, 1730], [400, 0], 1.2],            # London
        [[710, 1730, 850, 1900], [400, 0], 1.2],            # Windsor
        [[850, 1620, 1120, 1900], [1070, -1300], 2.4],      # Golden Horseshoe
        [[1120, 1680, 1360, 1900], [330, -1730], 3.2],      # Toronto
        [[1640, 1680, 1840, 1900], [100, -100], 1.6],       # Ottawa
        [[2110, 1620, 2530, 1900], [-20, -220], 2],         # Southern Quebec
        [[1840, 1650, 2110, 1900], [550, -700], 2],         # Montreal
        [[2350, 1400, 2530, 1590], [220, -800], 2],         # Quebec
        [[2230, 1310, 2350, 1430], [400, -1150], 1],        # Charlottetown
        [[2230, 1460, 2350, 1580], [-40, -500], 1.5],       # Trois-Rivieres
        [[2100, 1460, 2230, 1580], [80, -300], 1.5],        # Moncton
        [[2350, 1200, 2530, 1400], [220, -950], 2],         # Halifax
        [[2350, 980, 2530, 1200], [300, -1030], 1.5]        # St. John's
    ]
    svg_rearrange("../2025_Canada/election_map_compressed.svg", new_size=(w, size[1]))