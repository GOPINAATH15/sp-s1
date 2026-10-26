import json

with open("extracted_data/java_programs_parsed.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for i, p in enumerate(data):
    print(f"\n==================== [{i+1}] {p['title']} ====================")
    print(p['content'][:600])
