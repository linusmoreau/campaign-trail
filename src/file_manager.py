import os
import json

class FileManager:
    def load_json(self, dir: str, fname: str):
        with open(os.path.join(dir, fname), "r", encoding="utf-8") as f:
            return json.load(f)
        
    def dump_json(self, dir: str, fname: str, contents):
        with open(os.path.join(dir, fname), "w+", encoding="utf-8") as f:
            json.dump(contents, f, indent=4, ensure_ascii=False)
