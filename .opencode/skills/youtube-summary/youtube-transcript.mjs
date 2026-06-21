import { YoutubeTranscript } from "youtube-transcript";

function extractVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
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
    console.error("Usage: node youtube-transcript.mjs <youtube-url>");
    process.exit(1);
  }

  const videoId = extractVideoId(url);
  if (!videoId) {
    console.error("Invalid YouTube URL");
    process.exit(1);
  }

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    const text = transcript.map((t) => t.text).join(" ");
    console.log(text);
  } catch (err) {
    console.error("Failed to fetch transcript:", err.message);
    process.exit(1);
  }
}

main();
