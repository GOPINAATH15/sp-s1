import re

def scan_file(path):
    print("="*80)
    print("FILE:", path)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    pages = content.split("--- PAGE ")
    print(f"Total pages parsed: {len(pages)-1}")
    
    # Print first few pages (index / TOC)
    for p in pages[1:8]:
        lines = p.split("\n")
        page_num = lines[0].split(" ")[0]
        text_snippet = "\n".join(lines[1:25]).strip()
        print(f"\n[PAGE {page_num}]")
        print(text_snippet[:500])

scan_file("extracted_data/DBMS_Final_Record.txt")
scan_file("extracted_data/Java_Program_and_output__1.txt")
