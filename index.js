const puppeteer = require('puppeteer');
const data = require("./config.json");
let noOfPost = process.argv[2];
(async function () {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com', { waitUntil: "networkidle2" });//               /kunalsuri__/?hl=en

    await page.type("input[name='username']", data.user, { delay: 100 });
    await page.type("input[name='password']", data.password, { delay: 100 });
    await page.click("button[type='submit']");

    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);
    await page.type("input[placeholder='Search']", "pepper_pepcoding");
    await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click(".drKGC .fuqBx a"),
    ]);
    await page.waitForSelector("._9AhH0", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("._9AhH0"),
    ]);
    let i = 0;
    do {
        await page.waitForSelector(".fr66n .wpO6b", { visible: true });
        await page.click(".fr66n .wpO6b");
        await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle2" }),
            page.click("._65Bje.coreSpriteRightPaginationArrow"),
        ]);
        i++;
    } while (i < noOfPost) {
    }
})();

