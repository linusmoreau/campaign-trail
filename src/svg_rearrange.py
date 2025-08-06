from xml.dom import minidom
import os
from svg_compress import *

def matching_inset(path_section, insets):
    for inset in insets:
        for point in path_section:
            if inset[0][0] < point[0] < inset[0][2] and inset[0][1] < point[1] < inset[0][3]:
                return inset
    return None

def transform_path(d: str, default, insets) -> str:
    new_path = svg.Path()
    try:
        sections, _, closes = parse_path(d, strict=False)
    except TypeError:
        return d
    for section in sections:
        path_section = list(section)
        inset = matching_inset(path_section, insets)
        new_section = []
        if inset is None:
            inset = default
        for point in path_section:
            x = inset[0][0] + ((point[0] - inset[0][0]) * inset[2]) + inset[1][0]
            y = inset[0][1] + ((point[1] - inset[0][1]) * inset[2]) + inset[1][1]
            new_section.append((x, y))
        append_section_to_path(new_path, new_section)
    if not closes:
        new_path.pop()
    return new_path.d()

def transform_paths(paths: list[minidom.Element], default, insets):
    for path in paths:
        d = transform_path(path.getAttribute("d"), default, insets)
        path.setAttribute("d", d)

def svg_rearrange(default, insets, f_in: str, f_out: str | None = None, new_size=None):
    doc = minidom.parse(f_in)
    paths = doc.getElementsByTagName("path")
    transform_paths(paths, default, insets)
    if new_size is not None:
        svg = doc.getElementsByTagName("svg")[0]
        svg.setAttribute("width", str(new_size[0]))
        svg.setAttribute("height", str(new_size[1]))
        svg.setAttribute("viewbox", "0 0 " + str(new_size[0]) + " " + str(new_size[1]))
    if f_out is None:
        fname, ext = os.path.splitext(f_in)
        f_out = fname + "_rearranged" + ext
    with open(f_out, "w", encoding="utf-8") as f:
        doc.writexml(f, encoding="utf-8")
        
        
def canada_2025():
    size = (2550, 1900)
    target = (722.55, 400.133)
    w = target[0] / target[1] * size[1]
    default = ((0, 0, size[0], size[1]), (30, 0), 1)
    insets = [
        [[0, 1400, 390, 1650], [-470, -400], 1.5],          # Vancouver
        [[0, 1650, 200, 1900], [-370, -200], 1.5],          # Victoria
        [[200, 1650, 390, 1900], [-300, -250], 2],          # Calgary
        [[390, 1700, 550, 1900], [-100, -200], 2],          # Edmonton
        [[390, 1570, 550, 1700], [210, -20], 1.2],          # Saskatoon
        [[550, 1570, 710, 1700], [50, 130], 1.2],           # Regina
        [[550, 1700, 710, 1900], [250, -180], 2],           # Winnipeg
        [[710, 1620, 850, 1730], [430, 0], 1.2],            # London
        [[710, 1730, 850, 1900], [430, 0], 1.2],            # Windsor
        [[850, 1620, 1120, 1900], [1100, -1300], 2.4],      # Golden Horseshoe
        [[1120, 1680, 1360, 1900], [360, -1730], 3.2],      # Toronto
        [[1640, 1680, 1840, 1900], [130, -100], 1.6],       # Ottawa
        [[2110, 1620, 2530, 1900], [10, -220], 2],          # Southern Quebec
        [[1840, 1650, 2110, 1900], [580, -700], 2],         # Montreal
        [[2350, 1400, 2530, 1590], [250, -800], 2],         # Quebec
        [[2230, 1310, 2350, 1430], [430, -1150], 1],        # Charlottetown
        [[2230, 1460, 2350, 1580], [-10, -500], 1.5],       # Trois-Rivieres
        [[2100, 1460, 2230, 1580], [110, -300], 1.5],       # Moncton
        [[2350, 1200, 2530, 1400], [250, -950], 2],         # Halifax
        [[2350, 980, 2530, 1200], [330, -1020], 1.5]        # St. John's
    ]
    svg_rearrange(default, insets, "../2025Canada/election_map_compressed.svg", new_size=(w, size[1]))
    

def canada_2015():
    size = (1100, 950)
    target = (722.55, 400.133)
    w = target[0] / target[1] * size[1]
    default = ((0, 0, size[0], size[1]), (-200, 0), 1)
    translation = (-5.6350001,-125.29558)
    insets = [
        [[0, 720, 170, 850], [-320, -50], 1.5],    # Vancouver
        [[0, 850, 90, 950], [-320, -300], 1.5],    # Victoria
        [[170, 750, 250, 850], [-250, 50], 1.5],     # Calgary
        [[90, 850, 170, 950], [-170, -160], 1.5],     # Edmonton
        [[250, 770, 330, 850], [-220, -50], 1.5],     # Saskatoon
        [[340, 770, 390, 850], [-280, 30], 1.5],     # Regina
        [[170, 850, 250, 950], [-30, -100], 2],     # Winnipeg
        [[260, 870, 330, 930], [40, -20], 1.5],     # Windsor
        [[340, 830, 390, 930], [-20, -130], 1.5],     # London
        [[400, 820, 510, 940], [350, -660], 3.5],     # Golden Horsehshoe
        [[510, 820, 600, 940], [-50, -960], 4],     # Toronto
        [[710, 860, 790, 930], [-150, -80], 2.5],     # Ottawa
        [[790, 850, 890, 930], [290, -500], 3.5],    # Montreal
        [[890, 800, 1090, 930], [-10, -190], 2.7],    # South Quebec
        [[950, 650, 1030, 720], [-200, 130], 2],    # Halifax
        [[950, 730, 1030, 800], [-200, -70], 2],    # Quebec City
        [[1030, 750, 1090, 800], [-200, -200], 1.5],    # Trois-Rivieres
        [[1030, 700, 1090, 750], [-120, -150], 1.5],    # Moncton
        [[1030, 650, 1090, 690], [-40, -100], 1.5],    # Charlottetown
        [[1030, 570, 1090, 640], [-400, -200], 2],    # St. John's
    ]
    for inset in insets:
        inset[0][0] -= translation[0]
        inset[0][1] -= translation[1]
        inset[0][2] -= translation[0]
        inset[0][3] -= translation[1]
    svg_rearrange(default, insets, "../2015Canada/election_map_compressed.svg", new_size=(w, size[1]))


if __name__ == "__main__":
    canada_2015()