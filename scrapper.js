const puppeteer = require("puppeteer");
require("dotenv").config();

const url = process.env.URL_TRACKER;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  await page.setViewport({
    width: 1200,
    height: 10000,
  });

  let data = await page.evaluate(() => {
    return document.querySelector("span[itemprop=price]").innerText;
  });
  //console.log("le prix est de " + data);
  let newData = await data.substring(0, 4);

  if (parseInt(newData) < 940) {
    //ici on mets une fonction pour envoyer un email par exemple
    console.log("prix en dessous dés 940€");
  }
  await browser.close();
})();
