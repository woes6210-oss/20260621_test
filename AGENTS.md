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

## Available Commands
- `/scrape <url>` - Scrape a web page
- `/youtube <url>` - Get YouTube transcript (CC/subtitles)
- `/ytmp3 <url>` - Download YouTube video audio as MP3
