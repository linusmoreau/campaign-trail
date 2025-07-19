import os
from PIL import Image
import pillow_avif # type: ignore necessary for PIL to handle avif files

PORTRAITS_DIR = os.path.join(os.pardir, "portraits")
IMAGES_DIR = os.path.join(os.pardir, "images")
ADVISORS_DIR = os.path.join(os.pardir, "advisors")
PROCESSED_DIR = os.path.join(os.pardir, "processed")
if not os.path.exists(PROCESSED_DIR):
    os.makedirs(PROCESSED_DIR)


def process(f, crop=False, ratio=7/8, max_height=1200):
    img = Image.open(f)
    w, h = img.size
    if h > max_height:
        w = round(w * max_height / h)
        h = max_height
        img = img.resize((w, h))
    if crop:
        new_width = h * ratio
        margin = round((w - new_width) / 2)
        left = margin
        right = w - margin
        img = img.crop((left, 0, right, h))
    if img.mode != "RGB":
        img = img.convert("RGBA")
        canvas = Image.new("RGBA", img.size, "WHITE")
        canvas.paste(img, mask=img)
        img = canvas.convert("RGB") 
    return img
    
def process_and_save(f, crop=False, ratio=7/8):
    img = process(f, crop, ratio)
    jpg = os.path.splitext(os.path.split(f)[-1])[0] + ".jpg"
    img.save(os.path.join(PROCESSED_DIR, jpg))

def process_all():
    for f in os.listdir(PORTRAITS_DIR):
        process_and_save(os.path.join(PORTRAITS_DIR, f), crop=True, ratio=7/8)
    for f in os.listdir(IMAGES_DIR):
        process_and_save(os.path.join(IMAGES_DIR, f), crop=False)
    for dir in os.listdir(ADVISORS_DIR):
        MULTIPLIER = 16
        WIDTH_ASPECT = 13
        HEIGHT_ASPECT = 16
        advisor_img = Image.new("RGB", (2 * MULTIPLIER * WIDTH_ASPECT, MULTIPLIER * HEIGHT_ASPECT))
        for i, f in enumerate(os.listdir(os.path.join(ADVISORS_DIR, dir))):
            fpath = os.path.join(ADVISORS_DIR, dir, f)
            img = process(fpath, crop=True, ratio=WIDTH_ASPECT/HEIGHT_ASPECT)
            img = img.resize((MULTIPLIER * WIDTH_ASPECT, MULTIPLIER * HEIGHT_ASPECT))
            advisor_img.paste(img, (i * MULTIPLIER * WIDTH_ASPECT, 0))
        advisor_img.save(os.path.join(PROCESSED_DIR, dir + "_advisors.jpg"))

if __name__ == "__main__":
    process_all()
