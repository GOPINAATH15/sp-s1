import sys
sys.path.append("extracted_data")
from exact_java_from_pdf import EXACT_JAVA

for k in sorted(EXACT_JAVA.keys(), key=lambda x: int(x)):
    print(f"=== PROGRAM {k}: {EXACT_JAVA[k]['header']} ===")
    lines = EXACT_JAVA[k]['code'].split('\n')
    print(f"Total lines: {len(lines)}")
    print("First 3 lines:", lines[:3])
    print("Last 3 lines:", lines[-3:])
    print()
