import json

with open("extracted_data/Java_Program_and_output__1.txt", "r", encoding="utf-8") as f:
    java_text = f.read()

# Let's inspect the exact text of Java programs
print("=== JAVA RAW EXTRACT PREVIEW ===")
lines = java_text.split("\n")
print(f"Total Java lines: {len(lines)}")

# Save Java cleaned code into a structured JSON
# Let's extract each program
import re

# Split by "Program X:"
prog_splits = re.split(r"(Program\s+\d+\s*:\s*[^\n]+)", java_text)
print(f"Java splits: {len(prog_splits)}")

java_programs = []
for i in range(1, len(prog_splits), 2):
    title = prog_splits[i].strip()
    content = prog_splits[i+1].strip() if i+1 < len(prog_splits) else ""
    java_programs.append({"title": title, "content": content})
    print(f"Parsed Java: {title} ({len(content)} chars)")

with open("extracted_data/java_programs_parsed.json", "w", encoding="utf-8") as f:
    json.dump(java_programs, f, indent=2)
print("Saved java_programs_parsed.json")
