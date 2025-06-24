import os
from PIL import Image
import pillow_avif # type: ignore necessary for PIL to handle avif files

PORTRAITS_DIR = os.path.join(os.pardir, "portraits")
IMAGES_DIR = os.path.join(os.pardir, "images")
PROCESSED_DIR = os.path.join(os.pardir, "processed")
if not os.path.exists(PROCESSED_DIR):
    os.makedirs(PROCESSED_DIR)


def process(f, crop=False, ratio=7/8):
    img = Image.open(f) 
    if crop:
        w, h = img.size
        new_width = h * ratio
        margin = round((w - new_width) / 2)
        left = margin
        right = w - margin
        img = img.crop((left, 0, right, h))
    if img.mode != "RGB":
        img = img.convert("RGB")
    jpg = os.path.splitext(os.path.split(f)[-1])[0] + ".jpg"
    img.save(os.path.join(PROCESSED_DIR, jpg))


def process_all():
    for f in os.listdir(PORTRAITS_DIR):
        process(os.path.join(PORTRAITS_DIR, f), crop=True, ratio=7/8)
    for f in os.listdir(IMAGES_DIR):
        process(os.path.join(IMAGES_DIR, f), crop=False)


if __name__ == "__main__":
    process_all()