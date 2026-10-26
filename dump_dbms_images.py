import os
from pypdf import PdfReader

reader = PdfReader("DBMS_Final Record.pdf")
os.makedirs("dbms_images", exist_ok=True)

img_count = 0
for i, page in enumerate(reader.pages):
    for j, img in enumerate(page.images):
        img_name = f"page_{i+1:02d}_img_{j+1}_{img.name}"
        img_path = os.path.join("dbms_images", img_name)
        with open(img_path, "wb") as f:
            f.write(img.data)
        img_count += 1

print(f"Extracted {img_count} images from DBMS_Final Record.pdf")
