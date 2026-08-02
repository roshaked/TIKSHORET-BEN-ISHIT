from pathlib import Path

from docx import Document
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
MATERIALS = ROOT / "materials"
OUT = MATERIALS / "extracted"


def extract_pdf(path: Path) -> str:
    reader = PdfReader(str(path))
    chunks = []
    for index, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        chunks.append(f"\n--- page {index} ---\n{text.strip()}")
    return "\n".join(chunks).strip()


def extract_docx(path: Path) -> str:
    document = Document(str(path))
    paragraphs = [paragraph.text.strip() for paragraph in document.paragraphs if paragraph.text.strip()]
    return "\n".join(paragraphs).strip()


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for path in sorted(MATERIALS.rglob("*")):
        if path.is_dir() or OUT in path.parents:
            continue
        if path.suffix.lower() == ".pdf":
            text = extract_pdf(path)
        elif path.suffix.lower() == ".docx":
            text = extract_docx(path)
        else:
            continue
        relative = path.relative_to(MATERIALS)
        target = OUT / f"{relative.parent.name}__{path.stem}.txt"
        target.write_text(text, encoding="utf-8")
        print(f"{target.relative_to(ROOT)}\t{len(text)}")


if __name__ == "__main__":
    main()
