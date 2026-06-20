---
name: youtube-summary
description: Fetch YouTube video transcripts using the youtube-transcript script and generate summaries
metadata:
  audience: general
---

## Available tool

### YouTube transcript script
Run the youtube-transcript script to fetch a video's captions:
```
node scripts/youtube-transcript.mjs <youtube-url>
```

## Workflow
1. Extract video ID from the YouTube URL
2. Run `node scripts/youtube-transcript.mjs <url>` to get the transcript
3. Summarize the transcript into key bullet points
4. Return: title (from video page), key topics, and summary
