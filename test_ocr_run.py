import os
import asyncio
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
    if not engine:
        print("Could not create OCR engine")
        return
    
    img_files = sorted(os.listdir("dbms_images"))
    print(f"Total images to OCR: {len(img_files)}")
    
    results = {}
    for i, img_name in enumerate(img_files[:15]): # test first 15
        p = os.path.join("dbms_images", img_name)
        try:
            txt = await ocr_image(engine, p)
            results[img_name] = txt
            print(f"[{img_name}] ({len(txt)} chars):")
            for line in txt.split("\n")[:4]:
                print("  ", line)
        except Exception as e:
            print(f"[{img_name}] Error: {e}")

asyncio.run(main())
