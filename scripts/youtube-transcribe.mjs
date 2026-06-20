import { execSync } from "child_process";
import { existsSync, unlinkSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "..");
const TOOLS = join(ROOT, "tools", "whisper");
const YT_DLP = join(ROOT, "tools", "yt-dlp.exe");
const FFMPEG = join(ROOT, "tools", "ffmpeg");
const MODEL = join(TOOLS, "ggml-tiny.bin");
const WHISPER = join(TOOLS, "whisper-cli.exe");
const AUDIO = join(ROOT, "tmp_audio.wav");

function extractVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error("Usage: node youtube-transcribe.mjs <youtube-url>");
    process.exit(1);
  }

  const videoId = extractVideoId(url);
  if (!videoId) {
    console.error("Invalid YouTube URL");
    process.exit(1);
  }

  try {
    process.stderr.write("Downloading audio...\n");
    execSync(
      `"${YT_DLP}" --ffmpeg-location "${FFMPEG}" -x --audio-format wav -o "${AUDIO}" "${url}"`,
      { stdio: "pipe", timeout: 300000 }
    );

    process.stderr.write("Transcribing...\n");
    const out = execSync(
      `"${WHISPER}" -m "${MODEL}" -f "${AUDIO}" --no-prints`,
      { stdio: "pipe", timeout: 300000 }
    );
    process.stdout.write(out.toString());
  } catch (err) {
    console.error("Failed:", err.stderr?.toString() || err.message);
    process.exit(1);
  } finally {
    if (existsSync(AUDIO)) unlinkSync(AUDIO);
    const vtt = AUDIO.replace(".wav", ".vtt");
    if (existsSync(vtt)) unlinkSync(vtt);
    const txt = AUDIO.replace(".wav", ".txt");
    if (existsSync(txt)) unlinkSync(txt);
  }
}

main();
