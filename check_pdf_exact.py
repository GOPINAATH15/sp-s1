import re

with open("extracted_data/Java_Program_and_output__1.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Split by "Program X:"
sections = re.split(r"(Program \d+:)", text)
for i in range(1, len(sections), 2):
    prog_header = sections[i].strip()
    prog_body = sections[i+1].split("--- PAGE")[0].strip() if i+1 < len(sections) else ""
    # if OUTPUT: is in prog_body, take up to OUTPUT:
    # Actually let's take the code before OUTPUT:
    print(f"\n==================== {prog_header} ====================")
    lines = [l.strip() for l in prog_body.split("\n") if l.strip()]
    for l in lines[:6]:
        print("  ", l)
