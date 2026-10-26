import os
import asyncio

try:
    import winsdk.windows.media.ocr as ocr
    import winsdk.windows.graphics.imaging as imaging
    import winsdk.windows.storage as storage
    print("winsdk OCR modules available!")
except Exception as e:
    print("winsdk OCR import error:", e)
