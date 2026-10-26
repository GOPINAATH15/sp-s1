import json

with open("extracted_data/java_programs_parsed.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for i, p in enumerate(data):
    print(f"\n{'#'*80}\n### {p['title']}\n{'#'*80}")
    print(p['content'])
