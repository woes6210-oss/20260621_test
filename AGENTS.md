# Project Memory

## Python Virtual Environment
- Location: `.venv/`
- Activate: `.venv\Scripts\Activate.ps1` (PowerShell) or `.venv\Scripts\activate.bat` (cmd)
- Always activate before running any Python code.
- All Python dependencies must be installed inside this venv.

## Directory Structure
| Path        | Git | Purpose                     |
|-------------|-----|-----------------------------|
| `src/`      | yes | Source code                 |
| `scripts/`  | yes | Utility scripts             |
| `.opencode/`| yes | opencode configuration      |
| `tmp/`      | no  | Temporary build artifacts   |
| `results/`  | no  | Output results              |
| `materials/`| no  | Input materials             |
| `tools/`    | no  | Large binaries (yt-dlp, ffmpeg, etc.) |

## Available Commands
- `/scrape <url>` - Scrape a web page
- `/youtube <url>` - Get YouTube transcript (CC/subtitles)
- `/transcribe <url>` - Download & transcribe YouTube audio (requires venv)

## YouTube Transcription
For videos without captions:
1. Activate venv
2. Install deps: `pip install -r scripts/requirements.txt`
3. Run: `python scripts/youtube-transcribe.py <youtube-url>`

## Tools Location
- yt-dlp: `tools/yt-dlp.exe`
- ffmpeg: `tools/ffmpeg/`
- whisper.cpp: `tools/whisper/`
