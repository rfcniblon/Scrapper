const puppeteer = require('puppeteer');
require('dotenv').config();

const url = process.env.URL_TRACKER;

(async () =>{
 const browser = await puppeteer.launch({headless: true});
 const page = await browser.newPage();
 await page.goto(url, { waitUntil: "networkidle2"});

 await page.pdf({
     path:"prix.pdf",
     format:"A4",
 });

await browser.close();
})();
