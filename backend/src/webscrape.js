const puppeteer = require('puppeteer');
const url = 'https://apps.apple.com/us/app/hellochinese-learn-chinese/id1001507516';
const description = '.section__description';
console.log('Scraping');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector(description);
  //const element = await page.$(description);
  //console.log(element);
  const text = await page.evaluate(description => {
    const content = document.querySelectorAll(description)[0].textContent;
    return content;
  }, description);

  console.log(text);
  await browser.close();
})();