const {test, expect}= require('@playwright/test');

test.only('automating UI', async ({page})=>
{
 await page.goto("https://demowebshop.tricentis.com/login");
 await page.getByLabel("Email").fill("test11nov@test.com");
 await page.getByLabel("Password").fill("12345");
 await page.locator("input[value='Log in']").click();
 console.log("Logged in successfully and clicked as well");
})