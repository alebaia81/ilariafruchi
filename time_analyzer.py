import os
import json
import glob
from datetime import datetime

brain_dir = os.path.expanduser('~/.gemini/antigravity-ide/brain')
transcripts = glob.glob(f'{brain_dir}/*/.system_generated/logs/transcript.jsonl')

sessions = []
target_string = 'Consulente Finanziario'
target_string_2 = 'ilariafruchi'

for t_path in transcripts:
    try:
        with open(t_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            if not lines:
                continue
            
            # Check if this conversation is about Consulente Finanziario
            is_target_project = False
            for line in lines: # scan up to full log to be sure
                if target_string in line or target_string_2 in line:
                    is_target_project = True
                    break
            
            if not is_target_project:
                continue
                
            first_line = json.loads(lines[0])
            start_time = datetime.strptime(first_line['created_at'], '%Y-%m-%dT%H:%M:%SZ')
            
            active_minutes = 0.0
            last_time = None
            
            for line in lines:
                data = json.loads(line)
                if 'created_at' not in data:
                    continue
                t = datetime.strptime(data['created_at'], '%Y-%m-%dT%H:%M:%SZ')
                
                if last_time is None:
                    active_minutes += 5.0
                else:
                    diff = (t - last_time).total_seconds()
                    if diff < 1800: # 30 mins threshold
                        active_minutes += diff / 60.0
                    else:
                        active_minutes += 5.0 # assume a break happened
                last_time = t
            
            duration_hours = active_minutes / 60.0
            
            sessions.append({
                'id': t_path.split('/')[-4],
                'start': start_time,
                'duration': duration_hours
            })
    except Exception as e:
        pass

# group by date
summary = {}
total_hours = 0.0
for s in sessions:
    date_str = s['start'].strftime('%Y-%m-%d')
    if date_str not in summary:
        summary[date_str] = 0.0
    
    summary[date_str] += s['duration']
    total_hours += s['duration']

print("Risultati Consulente Finanziario:")
for d, hrs in sorted(summary.items()):
    if hrs > 0.05: # more than 3 minutes
        print(f"  {d}: {hrs:.2f} ore")

print(f"\nTotale complessivo Consulente Finanziario: {total_hours:.2f} ore")

