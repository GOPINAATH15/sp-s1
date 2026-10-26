import os
from pypdf import PdfReader

for fname in ['DBMS_Final Record.pdf', 'Java Program and output  (1).pdf']:
    reader = PdfReader(fname)
    print(f"\n==================== {fname} ====================")
    for i, page in enumerate(reader.pages):
        txt = (page.extract_text() or "").strip()
        imgs = len(page.images)
        first_line = txt.split("\n")[0] if txt else "(no text)"
        print(f"P{i+1:02d}: {len(txt):4d} chars, {imgs} imgs | {first_line[:70]}")
