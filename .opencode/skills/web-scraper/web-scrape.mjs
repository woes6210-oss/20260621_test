import * as cheerio from "cheerio";

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error("Usage: node web-scrape.mjs <url>");
    process.exit(1);
  }

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; OpenCode/1.0)" },
    });
    if (!res.ok) {
      console.error(`HTTP ${res.status}: ${res.statusText}`);
      process.exit(1);
    }
    const html = await res.text();
    const $ = cheerio.load(html);

    $("script, style, nav, footer, header, aside").remove();

    const title = $("title").text().trim();
    const body = $("body").text().replace(/\s+/g, " ").trim();

    console.log(`Title: ${title}`);
    console.log("---");
    console.log(body.substring(0, 10000));
  } catch (err) {
    console.error("Failed to scrape:", err.message);
    process.exit(1);
  }
}

main();
