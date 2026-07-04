import json
import glob
import re
import os

brain_dir = os.path.expanduser('~/.gemini/antigravity-ide/brain')
transcripts = glob.glob(f'{brain_dir}/*/.system_generated/logs/transcript.jsonl')

for t_path in transcripts[:5]:
    try:
        with open(t_path, 'r', encoding='utf-8') as f:
            for line in f:
                data = json.loads(line)
                if data.get('type') == 'USER_INPUT':
                    content = data.get('content', '')
                    match = re.search(r'<USER_REQUEST>(.*?)</USER_REQUEST>', content, re.DOTALL)
                    if match:
                        req = match.group(1).strip()
                        print("REQ:", repr(req[:50]))
    except Exception:
        pass
