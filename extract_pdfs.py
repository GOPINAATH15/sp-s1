import os
from pypdf import PdfReader

os.makedirs("extracted_data", exist_ok=True)

for fname in ["DBMS_Final Record.pdf", "Java Program and output  (1).pdf"]:
    clean_name = fname.replace(" ", "_").replace("(", "").replace(")", "").replace(".pdf", "")
    out_path = os.path.join("extracted_data", f"{clean_name}.txt")
    reader = PdfReader(fname)
    print(f"Reading {fname}: {len(reader.pages)} pages")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(f"=== {fname} ({len(reader.pages)} pages) ===\n\n")
        for i, page in enumerate(reader.pages):
            f.write(f"\n--- PAGE {i+1} ---\n")
            text = page.extract_text() or ""
            f.write(text)
    print(f"Saved to {out_path}")
