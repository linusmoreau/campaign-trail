import os
import math
from xml.dom import minidom
import svg.path as svg
import rdp
import visvalingamwyatt as vw

def to_complex(n: tuple[float, float]):
    return complex(n[0], n[1])

def to_tuple(n: complex):
    return (n.real, n.imag)

def parse_path(d: str, strict=False):
    path = svg.parse_path(d)
    section_indices = []
    section_start = 0
    for i, segment in enumerate(path):
        if type(segment) not in (svg.Move, svg.Line, svg.Close):
            if strict:
                raise TypeError("Segment is not a polyline")
        if type(segment) is svg.Close:
            section_indices.append((section_start, i))
            section_start = i + 1
    if len(path) > 0 and (len(section_indices) == 0 or section_indices[-1][1] < len(path) - 1):
        path.append(svg.Close(path[-1].start, path[-1].end))
        section_indices.append((section_start, len(path)))
    lengths = [svg.Path(*path[ends[0]:ends[1]+1]).length() for ends in section_indices]
    sections = map(lambda ends: map(lambda segment: to_tuple(segment.end), path[ends[0]:ends[1]+1]), section_indices)
    return sections, lengths

def append_section_to_path(path, section):
    path.append(svg.Move(to_complex(section[0])))
    for j in range(len(section) - 2):
        path.append(svg.Line(to_complex(section[j]), to_complex(section[j+1])))
    path.append(svg.Close(to_complex(section[-2]), to_complex(section[-1])))

def compress_svg_path(d: str, method: str = "vw", epsilon: float = 0, scale_epsilon: bool = False, min_length: float = 0) -> str:
    try:
        sections, lengths = parse_path(d, strict=True)
    except TypeError:
        return d
    new_path = svg.Path()
    for i, section in enumerate(sections):
        path_section = list(section)
        length = lengths[i]
        if length is not None and length < min_length:
            continue
        if scale_epsilon and length is not None:
            eps = epsilon*math.sqrt(length)
        else:
            eps = epsilon                
        if method == "vw":
            compressed = vw.simplify(path_section, threshold=eps)
        elif method == "rdp":
            compressed = rdp.rdp(path_section, epsilon=eps) # type: ignore as the module incorrectly type hints int
        else:
            raise NotImplementedError('method must be one of "vw" or "rdp"')
        print(f"Compressed line of {len(path_section)} points to {len(compressed)} points.")
        append_section_to_path(new_path, compressed)
    return new_path.d()


def compress_svg_file(f_in: str, f_out: str | None = None, first: int = 0, count: int | None = None, method: str = "vw", epsilon: float = 0, scale_epsilon: bool = False, min_length: float = 0):
    """Compress an SVG file using either the Visvalingam-Whyatt or Ramer-Douglas-Peucker algorithms.
    
    :Keyword Arguments:
    :f_in: path to input SVG file
    :f_out: path to output SVG file; defaults to same as f_in with suffixed with _compressed
    :method: one of "vw" or "rdp"; specifies which algorithm to use
    :epsilon: epsilon from the RDP algorithm or threshold in the VW algorithm; higher values give stronger compression
    :scale_epsilon: whether the epsilon should scale with size
    :min_length: minimum line length to be included in the compressed file
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
        d = compress_svg_path(d, method=method, epsilon=epsilon, scale_epsilon=scale_epsilon, min_length=min_length)
        path.setAttribute("d", d)
    if f_out is None:
        fname, ext = os.path.splitext(f_in)
        f_out = fname + "_compressed" + ext
    with open(f_out, "w", encoding="utf-8") as f:
        doc.writexml(f, encoding="utf-8", addindent=" "*4, newl="\n", standalone=True)

if __name__ == "__main__":
    compress_svg_file("../2015Canada/election_map.svg", count=338, epsilon=0.05, scale_epsilon=True, min_length=1)
