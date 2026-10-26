import re

with open("extracted_data/dbms_ocr_full.txt", "r", encoding="utf-8") as f:
    ocr_text = f.read()

# Let's inspect pages 4 to 44
with open("extracted_data/DBMS_Final_Record.txt", "r", encoding="utf-8") as f:
    pdf_text = f.read()

pages = pdf_text.split("--- PAGE ")
print(f"Total DBMS pages: {len(pages)-1}")

for i in range(4, len(pages)):
    header = pages[i].split("\n")[0]
    txt = "\n".join(pages[i].split("\n")[1:15]).strip()
    print(f"\n--- PAGE {i} ---")
    print(txt[:300])
