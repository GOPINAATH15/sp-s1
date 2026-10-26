import re

for enc in ["utf-16", "utf-8", "cp1252"]:
    try:
        with open("extracted_data/dbms_programs_annotated.txt", "r", encoding=enc) as f:
            text = f.read()
        print(f"Read successfully with {enc}, length={len(text)}")
        break
    except Exception:
        continue

progs = text.split("======================================================================")
for p in progs:
    if p.strip():
        lines = p.strip().split("\n")
        title = lines[0]
        print(f"\n>>> {title}")
        content = "\n".join(lines[1:])
        print(content[:300].strip())
