import os
from PIL import Image
import pillow_avif # type: ignore necessary for PIL to handle avif files

ROOT = os.path.dirname(os.path.dirname(__file__))
SIGNS_DIR = os.path.join(ROOT, "signs")
LOGOS_DIR = os.path.join(ROOT, "logos")
PORTRAITS_DIR = os.path.join(ROOT, "portraits")
IMAGES_DIR = os.path.join(ROOT, "images")
ADVISORS_DIR = os.path.join(ROOT, "advisors")
PROCESSED_DIR = os.path.join(ROOT, "processed")
if not os.path.exists(PROCESSED_DIR):
    os.makedirs(PROCESSED_DIR)


def process(f, crop=False, scale=False, fill=False, ratio=7/8, max_width=1200, max_height=1200, background="WHITE"):
    if crop + scale + fill > 1:
        raise ValueError("Cannot do more than one of crop, scale, or fill")
    img = Image.open(f)
    w, h = img.size
    if h > max_height:
        w = round(w * max_height / h)
        h = max_height
    if w > max_width:
        h = round(h * max_width / w)
        w = max_width
    if (w, h) != img.size:
        img = img.resize((w, h))
    if crop:
        if w/h > ratio:
            new_width = round(h * ratio)
            left = round((w - new_width) / 2)
            right = left + new_width
            img = img.crop((left, 0, right, h))
        else:
            new_height = round(w / ratio)
            top = round((h - new_height) / 2)
            bottom = top + new_height
            img = img.crop((0, top, w, bottom))
    if scale:
        if w/h > ratio:
            new_width = round(h * ratio)
            img = img.resize((new_width, h))
        else:
            new_height = round(w / ratio)
            img = img.resize((w, new_height))
    if fill:
        if w/h > ratio:
            new_height = round(w / ratio)
            top = round((h - new_height) / 2)
            canvas = Image.new("RGBA", (w, new_height), background)
            canvas.paste(img, box=(0, abs(top)), mask=img)
            img = canvas.convert("RGB")
        else:
            new_width = round(h * ratio)
            left = round((w - new_width) / 2)
            canvas = Image.new("RGBA", (new_width, h), background)
            canvas.paste(img, box=(abs(left), 0), mask=img)
            img = canvas.convert("RGB")
    if img.mode != "RGB":
        img = img.convert("RGBA")
        canvas = Image.new("RGBA", img.size, background)
        canvas.paste(img, mask=img)
        img = canvas.convert("RGB") 
    return img
    
def process_and_save(f: str, f_out: str | None = None, crop=False, scale=False, fill=False, ratio=7/8, ext="jpg", background="WHITE"):
    img = process(f, crop, scale, fill, ratio, background=background)
    if f_out is None:
        f_out = os.path.splitext(os.path.split(f)[-1])[0] + "." + ext
    img.save(os.path.join(PROCESSED_DIR, f_out))

def process_all():
    for f in os.listdir(LOGOS_DIR):
        process_and_save(os.path.join(LOGOS_DIR, f), crop=True, ratio=7/8, ext="png")
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
    # process_all()
    # process_and_save(os.path.join(PORTRAITS_DIR, "carney.avif"), crop=True, ratio=1)
    process_and_save(os.path.join(SIGNS_DIR, "poilievre_logo.png"), fill=True, ratio=2.5, ext="png", background="#003e69")
    process_and_save(os.path.join(SIGNS_DIR, "carney_logo.png"), fill=True, ratio=2.5, ext="png")
    process_and_save(os.path.join(SIGNS_DIR, "singh_logo.png"), fill=True, ratio=2.5, ext="png")
