---
name: web-scraper
description: Scrape and extract structured data from web pages
metadata:
  audience: general
---

## Capabilities
- Fetch and extract text content from any public URL using webfetch
- Parse HTML tables, lists, and structured data
- Extract article content, headings, and metadata
- Handle pagination by sequencing multiple URL fetches

## Usage
When asked to scrape a website:
1. Use `webfetch` to retrieve the page content
2. Parse and organize the extracted data
3. If pagination is needed, fetch subsequent pages sequentially
4. Return structured results (table, list, or markdown format)

## Limitations
- Cannot execute JavaScript (only server-rendered HTML)
- Some sites may block automated requests
- For dynamic content, suggest alternative approaches
