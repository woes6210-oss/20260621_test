---
name: web-scraper
description: Scrape and extract structured data from web pages using the built-in webfetch tool or the web-scrape script
metadata:
  audience: general
---

## Available tools

### Built-in webfetch (recommended for most cases)
Use the `webfetch` tool to fetch any public URL. It returns clean markdown content.

### Web-scrape script (for advanced needs)
Run the web-scrape script when you need raw HTML parsing or custom extraction:
```
node scripts/web-scrape.mjs <url>
```

## Usage
1. Use `webfetch` for quick content fetching
2. For complex pages, use the `web-scrape` script via bash
3. Return structured results in markdown format
