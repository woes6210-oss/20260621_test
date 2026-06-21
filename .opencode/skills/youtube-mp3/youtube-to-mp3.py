import sys, os, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
FFMPEG = str(ROOT / "tools" / "ffmpeg" / "ffmpeg.exe")
OUTPUT = ROOT / "results"

def main():
    url = sys.argv[1] if len(sys.argv) > 1 else None
    if not url:
        print("Usage: python youtube-to-mp3.py <youtube-url>", file=sys.stderr)
        sys.exit(1)

    OUTPUT.mkdir(exist_ok=True)

    proc = subprocess.run(
        [sys.executable, "-m", "yt_dlp",
         "-x", "--audio-format", "mp3",
         "--ffmpeg-location", FFMPEG,
         "-o", str(OUTPUT / "%(title)s.%(ext)s"),
         "--quiet", "--no-warnings",
         url],
        capture_output=True, text=True, timeout=300
    )
    if proc.returncode != 0:
        print(proc.stderr, file=sys.stderr)
        sys.exit(1)

    print(f"Saved to: {OUTPUT.resolve()}", file=sys.stderr)
    for f in OUTPUT.iterdir():
        if f.suffix == ".mp3":
            print(f.name)

if __name__ == "__main__":
    main()
