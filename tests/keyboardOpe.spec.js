import { test, expect} from '@playwright/test';


test('keyboard opertaions', async ({ page })=>

{
await page.goto('https://www.google.co.in/');
await page.locator('#APjFqb').focus();
await page.keyboard.type('playwright automation', {delay:100}); //* delay while typing:
await page.keyboard.down('Control');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');
await page.waitForTimeout(5000);
})

test('redbus autosuggestion', async ({ page })=>
{
    await page.goto('https://www.redbus.in/');
    await page.locator('.sc-ifAKCX').first().focus();
    await page.keyboard.type('Hsr', {delay: 300});
    await page.keyboard.down('Control');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    //now adding 2nd destination:
    //await page.locator('.sc-ifAKCX').last().focus();
    //!also we can use tab keyboard opertaion to jump to the next input field:
    await page.keyboard.press('Tab');
    const findingtagname= await page.locator('.sc-ifAKCX').last().evaluate(el => el.tagName);
    //await page.keyboard.press('Enter');
    //await page.keyboard.type('hydrabad', {delay: 500});
    console.log(findingtagname);
    //await page.keyboard.press('ArrowDown');
    //await Page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);
}
)