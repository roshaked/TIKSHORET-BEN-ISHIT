from pathlib import Path
import re
from zipfile import ZipFile
from xml.etree import ElementTree
import sys

NS = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}


def extract(path: Path) -> str:
    slides = []
    with ZipFile(path) as archive:
        names = sorted(
            (name for name in archive.namelist() if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)),
            key=lambda name: int(re.search(r"slide(\d+)", name).group(1)),
        )
        for index, name in enumerate(names, start=1):
            root = ElementTree.fromstring(archive.read(name))
            paragraphs = []
            for paragraph in root.findall(".//a:p", NS):
                text = "".join(node.text or "" for node in paragraph.findall(".//a:t", NS)).strip()
                if text:
                    paragraphs.append(text)
            slides.append(f"\n--- שקופית {index} ---\n" + "\n".join(paragraphs))
    return "\n".join(slides).strip() + "\n"


if __name__ == "__main__":
    source = Path(sys.argv[1])
    output = Path(sys.argv[2]) if len(sys.argv) > 2 else source.with_suffix(".txt")
    output.write_text(extract(source), encoding="utf-8")
    print(f"extracted {len(extract(source).splitlines())} lines to {output}")
