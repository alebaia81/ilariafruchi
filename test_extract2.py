import json
import glob
import os

brain_dir = os.path.expanduser('~/.gemini/antigravity-ide/brain')
transcripts = glob.glob(f'{brain_dir}/*/.system_generated/logs/transcript.jsonl')

for t_path in transcripts[:5]:
    try:
        with open(t_path, 'r', encoding='utf-8') as f:
            for line in f:
                data = json.loads(line)
                tool_calls = data.get('tool_calls', [])
                for tc in tool_calls:
                    name = tc.get('function', {}).get('name')
                    args_str = tc.get('function', {}).get('arguments', '{}')
                    args = json.loads(args_str) if isinstance(args_str, str) else args_str
                    
                    if name in ['write_to_file', 'replace_file_content']:
                        target = args.get('TargetFile', '')
                        filename = os.path.basename(target)
                        print(f"Modificato: {filename}")
    except Exception:
        pass
