import os
import math
from xml.dom import minidom
import svg.path as svg
import rdp

def to_complex(n: tuple[float, float]):
    return complex(n[0], n[1])

def to_tuple(n: complex):
    return (n.real, n.imag)

def compress_svg_path(d: str, epsilon: float = 0, scale_epsilon: bool = True, min_length: float = 0) -> str:
    path = svg.parse_path(d)
    section_indices = []
    section_start = 0
    for i, segment in enumerate(path):
        if type(segment) not in (svg.Move, svg.Line, svg.Close):
            return d
        if type(segment) is svg.Close:
            section_indices.append((section_start, i))
            section_start = i + 1
    lengths = [svg.Path(*path[ends[0]:ends[1]+1]).length() for ends in section_indices]
    sections = map(lambda ends: map(lambda segment: to_tuple(segment.end), path[ends[0]:ends[1]+1]), section_indices)
    new_path = svg.Path()
    for i, section in enumerate(sections):
        path_section = list(section)
        length = lengths[i]
        if length is not None and length < min_length:
            continue
        if scale_epsilon:
            if length is None:
                eps = epsilon
            else:
                eps = epsilon*math.sqrt(length)
        compressed = rdp.rdp(path_section, epsilon=eps) # type: ignore as the module incorrectly type hints int
        print(len(path_section), len(compressed))
        new_path.append(svg.Move(to_complex(compressed[0])))
        for i in range(len(compressed) - 2):
            new_path.append(svg.Line(to_complex(compressed[i]), to_complex(compressed[i+1])))
        new_path.append(svg.Close(to_complex(compressed[-2]), to_complex(compressed[-1])))
    return new_path.d()


def compress_svg_file(f_in: str, f_out: str | None = None, first: int = 0, count: int | None = None, epsilon: float = 0, scale_epsilon: bool = True, min_length: float = 0):
    """Compress an SVG file using the Ramer-Douglas-Peucker algorithm.
    
    :Keyword Arguments:
    :f_in: path to input SVG file
    :f_out: path to output SVG file; defaults to same as f_in with suffixed with _compressed
    :epsilon: epsilon from the RDP algorithm; higher values give stronger compression
    :first: index of first path to compress
    :count: number of paths to compress; defaults to compressing to all subsequent paths
    """
    doc = minidom.parse(f_in)
    paths = doc.getElementsByTagName('path')
    paths = paths[first:]
    if count is not None:
        paths = paths[:count]
    for path in paths:
        d = path.getAttribute("d")
        d = compress_svg_path(d, epsilon=epsilon, scale_epsilon=True, min_length=min_length)
        path.setAttribute("d", d)
    if f_out is None:
        fname, ext = os.path.splitext(f_in)
        f_out = fname + "_compressed" + ext
    with open(f_out, "w", encoding="utf-8") as f:
        doc.writexml(f, encoding="utf-8")

if __name__ == "__main__":
    compress_svg_file("../2025_Canada/election_map.svg", count=343, epsilon=0.05, scale_epsilon=True, min_length=5)
