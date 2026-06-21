# Project Memory

## Convention
Skill-specific scripts → inside `.opencode/skills/<skill-name>/`
Shared/common tools → `tools/` or `scripts/`

## Python Virtual Environment
- Location: `.venv/`
- Activate: `.venv\Scripts\Activate.ps1` (PowerShell) or `.venv\Scripts\activate.bat` (cmd)
- Always activate before running any Python code.
- All Python dependencies must be installed inside this venv.

## Directory Structure
| Path        | Git | Purpose                     |
|-------------|-----|-----------------------------|
| `src/`      | yes | Source code                 |
| `scripts/`  | yes | Shared scripts              |
| `.opencode/skills/` | yes | Each skill has own subdir with SKILL.md + its scripts |
| `tmp/`      | no  | Temporary build artifacts   |
| `results/`  | no  | Output results              |
| `materials/`| no  | Input materials             |
| `tools/`    | no  | Shared large binaries (ffmpeg, etc.) |

## Available Commands
- `/scrape <url>` - Scrape a web page
- `/youtube <url>` - Get YouTube transcript (CC/subtitles)
- `/ytmp3 <url>` - Download YouTube video audio as MP3
