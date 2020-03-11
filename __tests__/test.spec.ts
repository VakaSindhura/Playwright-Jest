import { chromium } from 'playwright';

test('testing example', async () => {
    try {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/watch?v=Zzylc-7PwQ4');
    } catch (error) {
        console.error(error);
    }
});
