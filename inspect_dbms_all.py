import json
import re

with open("extracted_data/dbms_ocr_results.json", "r", encoding="utf-8") as f:
    ocr_data = json.load(f)

with open("extracted_data/DBMS_Final_Record.txt", "r", encoding="utf-8") as f:
    raw_text = f.read()

pages = raw_text.split("--- PAGE ")

# Let's see all programs in DBMS
print("=== DBMS PROGRAMS & QUERIES OVERVIEW ===")
for p_idx in range(4, len(pages)):
    page_content = pages[p_idx]
    page_lines = [l.strip() for l in page_content.split("\n") if l.strip()]
    header = " | ".join(page_lines[:3]) if page_lines else "(empty)"
    
    # get OCR for this page
    p_num_str = f"page_{p_idx:02d}"
    matched_imgs = [k for k in sorted(ocr_data.keys()) if k.startswith(p_num_str)]
    
    print(f"\n[PAGE {p_idx}] {header[:80]}")
    for img_k in matched_imgs:
        ocr_lines = [l.strip() for l in ocr_data[img_k].split("\n") if l.strip()]
        queries = [l for l in ocr_lines if any(kw in l.lower() for kw in ['mysql>', 'create ', 'select ', 'insert ', 'update ', 'delete ', 'desc ', 'db.', 'use '])]
        print(f"  {img_k}: {len(ocr_lines)} lines")
        for q in queries[:5]:
            print(f"    CMD: {q}")
