const {test, expect}= require('@playwright/test');
const exp = require('constants');
test('softassretation test:', async ({page})=>
{
await page.goto('https://demo.automationtesting.in/Register.html');
//*assertion type 1: to validate the URL of the page.  page has URl
await expect.soft(page).toHaveURL("https://demo.automationtesting.in/Register.html");
//! just need to add soft ketword after expect to make it soft assertion.
console.log("URL validated successfully");
await page.locator("button[class='btn btn-success navbar-toggle']").click();
await expect.soft(page).toHaveTitle('Register');

})
test.only('playwith edit box:', async ({page})=>
    {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await expect.soft(await page.locator("div input[type$='email']")).toBeVisible();
    await expect.soft(await page.locator("div input[type$='email']")).toBeEnabled();
    await expect.soft(await page.locator("div input[type$='emai']")).toBeEditable();
    await expect.soft(await page.locator("div input[type$='email']")).toBeEmpty();
    //we can provide the value of fill under the locator as well.
    await page.fill("div input[type$='email']", 'ramranjanjha89.rr@gmail.com');

    
    })