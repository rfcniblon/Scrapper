const puppeteer = require("puppeteer");
require("dotenv").config();

const url = process.env.URL_TRACKER;

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  await page.setViewport({
    width: 1200,
    height: 10000,
  });

  await page.screenshot({
    path: "image.png",
  });

  await browser.close();
})();
