import os
import asyncio
from pypdf import PdfReader
import winsdk.windows.media.ocr as ocr
import winsdk.windows.graphics.imaging as imaging
import winsdk.windows.storage as storage

async def ocr_image(engine, file_path):
    abs_path = os.path.abspath(file_path)
    file = await storage.StorageFile.get_file_from_path_async(abs_path)
    stream = await file.open_async(storage.FileAccessMode.READ)
    decoder = await imaging.BitmapDecoder.create_async(stream)
    software_bitmap = await decoder.get_software_bitmap_async()
    result = await engine.recognize_async(software_bitmap)
    return "\n".join([line.text for line in result.lines])

async def main():
    engine = ocr.OcrEngine.try_create_from_user_profile_languages()
    reader = PdfReader("Java Program and output  (1).pdf")
    os.makedirs("java_images", exist_ok=True)
    
    with open("extracted_data/java_outputs.txt", "w", encoding="utf-8") as out_f:
        for i, page in enumerate(reader.pages):
            for j, img in enumerate(page.images):
                img_name = f"page_{i+1:02d}_img_{j+1}_{img.name}"
                p = os.path.join("java_images", img_name)
                with open(p, "wb") as f:
                    f.write(img.data)
                try:
                    txt = await ocr_image(engine, p)
                    out_f.write(f"\n=== [PAGE {i+1}] {img_name} ===\n{txt}\n")
                    print(f"Java Page {i+1}: {txt.replace('\n', ' ')[:80]}")
                except Exception as e:
                    print(f"Java Page {i+1} OCR error: {e}")

asyncio.run(main())
