const { test, expect } = require('@playwright/test');
const { console } = require('inspector');

test('rahul sheetty demo web test', async ({page})=>

{
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("input[type='email']").fill("ramranjanjha1994@gmail.com");
await page.locator("input[type='password']").fill("8271554461@rR");
await page.locator("#login").click();
//below code is used to wait for the page to load completely. Means all api call should load till wait for next execution.
await page.waitForLoadState('networkidle');
//another way to wait for the page to load. 
//await page.locator(".card-body").first().waitFor();
//below code is used to fetch all the text content from the page.
const all_product_list= await page.locator(".card-body").allTextContents();
console.log("----------------------------------------------------------------");
console.log(all_product_list);
console.log("----------------------------------------------------------------");
console.log("dynamic wait which apply on api calls load test case passed");

})

test('how to handle dropdown', async ({page})=>

    {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const dropdown_handles= await page.locator("#dropdown-class-example");
    await dropdown_handles.selectOption("Option1");
    // pause is used to hold the and debug the code.
    //await page.pause();
    //below code is used to check the checkbox.
    const check_radio= await page.locator("input[value='radio2']");
    check_radio.click();
    //await page.pause();
    await expect(check_radio).toBeChecked();
    console.log("radio button is clicked");
    //Play with check box how to check and uncheck:
    const check_box= await page.locator("input[value='option1']");
    check_box.click();
    //await page.pause();
    await expect(check_box).toBeChecked();
    
    await check_box.uncheck();
    //there is no assertion to validate uncheck. So we can use below code to validate the uncheck.
    await expect(check_box).not.toBeChecked();
    console.log("check box is clicked and unchecked");
    
    })
     // await is used with action where we are waiting for any action perform on the page.
     //we can use either inside or our ouside a block of code.

     test('handle blinking text', async ({page})=>

        {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        const blink_text= await page.locator(".blinkingText");
        console.log("how to handle bilnking text and and how to validate");
        // so for that playwright has best option just call a methog and pass html class name and correct text)
        await expect(blink_text).toHaveAttribute("class","blinkingText");
        console.log("blinking text is validated");

        })

        //handle multiple windows in playwright: 

        test('handle multiple windows', async ({browser})=>

            {
                const context= await browser.newContext();
                const parantpage= await context.newPage();
            await parantpage.goto("https://rahulshettyacademy.com/AutomationPractice/");
             // save the locator in a vairable to perfom click operation.
            const newtab= await parantpage.locator("a#opentab");
          // as async feature in js we can run multiple script in parallel.
            // so we can use below code to handle multiple windows.
            //wait event and click event will run in parallel. so that it will catch a new tab opened.
           
            const [child_window] = await Promise.all([
            context.waitForEvent('page'),
            newtab.click(),
            ])
              //await page.pause();
              //now with child windos variable we can perform any action on the new tab.
            const new_tab_text=  await child_window.locator("div.header-opening-time").textContent();
            //await page.pause();
            console.log("new tab text is: "+new_tab_text);
            //to switch to normal window we can just call page object.

            //Bringtofront is used to bring the paraant page to front. just like we are switching to parent window.
            await parantpage.bringToFront();
            await parantpage.locator("#autocomplete").fill("my name is ram");
            const checkbox3= await parantpage.locator("#checkBoxOption3");
            await checkbox3.check();
            await expect(checkbox3).toBeChecked();
            
            
            })

            test('test', async ({ page }) => {
                await page.goto('https://www.qaclickacademy.com/');
                await page.locator('#header-part').getByRole('link', { name: 'Logo' }).click();
                await page.getByRole('link', { name: 'Courses', exact: true }).click();
                await page.goto('https://www.qaclickacademy.com/');
                await page.getByRole('link', { name: ' Home' }).click();
                await page.getByRole('link', { name: 'About us', exact: true }).click();
                await page.locator('div').filter({ hasText: 'Sitemap Home Courses Blog' }).nth(3).click();
                await expect(page.getByRole('heading', { name: 'Sitemap' })).toBeVisible();
              });