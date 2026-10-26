import re

with open("extracted_data/Java_Program_and_output__1.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Remove page header lines like '--- PAGE X ---'
clean_text = re.sub(r"--- PAGE \d+ ---\n?", "", text)
clean_text = re.sub(r"=== Java Program and output[^\n]*\n?", "", clean_text)

# Let's split by Program 1:, Program 2:, etc.
pattern = r"(Program \d+:\s*[^\n]+)"
parts = re.split(pattern, clean_text)

print(f"Total parts: {len(parts)}")

exact_programs = {}
for i in range(1, len(parts), 2):
    header = parts[i].strip()
    body = parts[i+1].strip() if i+1 < len(parts) else ""
    # Cut off at OUTPUT:
    if "OUTPUT:" in body:
        code_part = body.split("OUTPUT:")[0].strip()
    else:
        code_part = body.strip()
    
    prog_num = re.search(r"Program (\d+)", header).group(1)
    exact_programs[prog_num] = {
        "header": header,
        "code": code_part
    }
    print(f"\n[{prog_num}] {header}")
    print(f"Code length: {len(code_part)} chars")

with open("extracted_data/exact_java_from_pdf.py", "w", encoding="utf-8") as f:
    f.write("EXACT_JAVA = " + repr(exact_programs))
print("Saved exact_java_from_pdf.py")
