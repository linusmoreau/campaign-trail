import os
from xml.dom import minidom
import svg.path as svg
import rdp

def to_complex(n: tuple[float, float]):
    return complex(n[0], n[1])

def compress_svg_path(d: str, epsilon: float = 0) -> str:
    path = svg.parse_path(d)
    point_sequences = []
    point_sequence = []
    for segment in path:
        if type(segment) not in (svg.Move, svg.Line, svg.Close):
            return d
        else:
            x = segment.end.real
            y = segment.end.imag
            point_sequence.append((x, y))
        if type(segment) is svg.Close:
            point_sequences.append(point_sequence)
            point_sequence = []
    new_path = svg.Path()
    for point_sequence in point_sequences:
        compressed = rdp.rdp(point_sequence, epsilon=epsilon) # type: ignore as the module incorrectly type hints int
        new_path.append(svg.Move(to_complex(compressed[0])))
        for i in range(len(compressed) - 2):
            new_path.append(svg.Line(to_complex(compressed[i]), to_complex(compressed[i+1])))  
        new_path.append(svg.Close(to_complex(compressed[-2]), compressed[-1]))
    return new_path.d()


def compress_svg_file(f_in: str, f_out: str | None = None, first: int = 0, count: int | None = None, epsilon: float = 0):
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
        d = compress_svg_path(d, epsilon)
        path.setAttribute("d", d)
    if f_out is None:
        fname, ext = os.path.splitext(f_in)
        f_out = fname + "_compressed" + ext
    with open(f_out, "w", encoding="utf-8") as f:
        doc.writexml(f, encoding="utf-8")
