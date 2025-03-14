const { test, expect } = require('@playwright/test');

test('revision test', async ({page})=>

{
    const productname="iphone 12";
    const username ="ramranjanjha1994@gmail.com";
    const password= "8271554461@rR";
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("input[type='email']").fill(username);
await page.locator("input[type='password']").fill(password);
await page.locator("#login").click();
await page.waitForLoadState('networkidle');
console.log("step 1: -----login successfull");
const items= await page.locator(".card-body");
await items.allTextContents();
 const prodct_count= await items.count();
 for(let i=0; i<prodct_count; i++)
 {

    if (await items.nth(i).locator("b").textContent()==productname)
    {
 
        await items.nth(i).locator("text= Add To Cart").click();
        console.log("step 2: -----product added to cart");
        break;
    }
 }
//go to cart to buy the product
 await page.locator("button[routerlink$='/dashboard/cart']").click();
 const page_content= await page.locator("text= No Products in Your Cart !");
 await page_content.isVisible();
 console.log(await page_content.textContent());
 console.log("step 3: -----product added to cart");
 console.log(await page.locator("div[id$='toast-container']").textContent());

})