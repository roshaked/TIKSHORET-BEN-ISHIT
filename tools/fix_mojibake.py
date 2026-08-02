from pathlib import Path


FILES = [
    "index.html",
    "app.js",
    "enhanced-content.js",
    "tests/site.test.js",
]


def repair(text: str) -> str:
    try:
        return text.encode("cp1255").decode("utf-8")
    except UnicodeError:
        return text


for file_name in FILES:
    path = Path(file_name)
    original = path.read_text(encoding="utf-8")
    fixed = repair(original)
    if fixed != original:
        path.write_text(fixed, encoding="utf-8", newline="")
        print(f"fixed {file_name}")
