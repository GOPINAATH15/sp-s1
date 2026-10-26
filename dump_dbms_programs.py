import json

with open("extracted_data/dbms_ocr_results.json", "r", encoding="utf-8") as f:
    ocr_data = json.load(f)

# Let's inspect DBMS programs 1 to 10
programs_pages = {
    "Program 1: Banking System": ["page_04", "page_05"],
    "Program 2: Online Reservation System": ["page_06", "page_07", "page_08"],
    "Program 3: Personal Information": ["page_09", "page_10", "page_11", "page_12", "page_13", "page_14"],
    "Program 4: Student Mark Processing System": ["page_15", "page_16"],
    "Program 5: E-Commerce Product Catalog (MongoDB)": ["page_17", "page_18", "page_19"],
    "Program 6: Basic CRUD Operations (MongoDB)": ["page_20", "page_21", "page_22", "page_23", "page_24", "page_25", "page_26"],
    "Program 7: Built-in Functions (MongoDB)": ["page_27", "page_28", "page_29", "page_30", "page_31", "page_32", "page_33", "page_34"],
    "Program 8: Sorting, Filtering & Indexing (MongoDB)": ["page_35", "page_36"],
    "Program 9: Create Collection & Find Document (MongoDB)": ["page_37", "page_38", "page_39"],
    "Program 10: Stock Exchange Real-Time Dataset (MongoDB)": ["page_40", "page_41", "page_42", "page_43", "page_44"],
}

for prog_name, pages in programs_pages.items():
    print("=" * 70)
    print(prog_name)
    print("=" * 70)
    for p in pages:
        for k in sorted(ocr_data.keys()):
            if k.startswith(p):
                print(f"--- {k} ---")
                print(ocr_data[k].strip())
                print()
