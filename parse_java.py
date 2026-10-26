import re

with open("extracted_data/Java_Program_and_output__1.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find all Program headers
programs = re.split(r"(--- PAGE \d+ ---\s+Program \d+:|Program \d+:)", text)
print(f"Split chunks: {len(programs)}")

for i in range(1, len(programs), 2):
    header = programs[i].strip()
    body = programs[i+1] if i+1 < len(programs) else ""
    # take first 300 chars of body
    print("="*60)
    print(header)
    lines = [l for l in body.split("\n") if l.strip()]
    print("Snippet:")
    for l in lines[:10]:
        print("  ", l)
