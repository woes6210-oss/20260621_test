---
name: youtube-summary
description: Fetch YouTube video transcripts and generate summaries
metadata:
  audience: general
---

## Capabilities
- Retrieve YouTube video metadata (title, description, duration)
- Extract video captions/transcripts using webfetch
- Generate concise summaries of video content
- Support multiple languages if captions are available

## Usage
When asked to summarize a YouTube video:
1. Extract the video ID from the YouTube URL
2. Use `webfetch` to get video page metadata
3. Fetch the transcript from YouTube's caption endpoint
4. Summarize the transcript into key points
5. Return: title, duration, key topics, and bullet-point summary

## Transcript URL format
- Auto-generated captions: `https://youtubetranscript.com/?v={videoId}`
- Manual captions: fall back to parsing video page data
