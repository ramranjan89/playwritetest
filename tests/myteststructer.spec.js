import {test, expect} from '@playwright/test';



test.beforeEach(async ({page})=>

{
    
    await page.goto('https://letcode.in/test');
    //await page.waitForLoadState('networkidle');

})
test.describe('Automation Testing Practice', async ()=>
{
 test.beforeEach(async ({page})=>
 {
    await expect(page.getByText("Edit")).toBeVisible();
    await expect(page.getByText("Edit")).toBeEnabled();
    await page.getByText("Edit").click();

 })
    test('Verify the title of the page', async ({page})=>
    {
        const title = await page.title();
        const prefilledInput= page.locator("#join");
        await expect.soft(title).toBe("Edit Fields | LetCode with Koushik");
        await page.getByPlaceholder("Enter first & last name").fill("ram ranjan ojha");
        //validate the value of the input field
        const inputTextValue=  await page.locator("#join").getAttribute("value"); //! get the attribute value:
        console.log(inputTextValue);
        expect(inputTextValue).toBe("I am good");
        //Now removing filled input text and putting my keywords:
         await prefilledInput.fill("");
         await prefilledInput.fill("ram is a good boy");
         // css for exact visible text match:
         const getTextloc=  await page.locator(':text-is("What is inside the text box")').textContent();
         //css for partial text match:

         const partialsearch= page.locator(':text("What is inside")').textContent();
        
         console.log(getTextloc);
    
        
    })

    test.only('user facing locators', async({page})=>
    
    {
        const cssparant= page.locator('.card-content div');
        const partialsearch= await page.locator(':text("What is inside")').textContent();
        console.log(partialsearch);
        const textfetch= await page.locator('.card-content div :text-is("Clear the text")').textContent();
        await page.locator('#clearMe').fill("");
        //await page.locator('.card-content').locator('div').locator(':text-is("Clear the text")')
        //.getByRole('textbox', {name: 'Clear the text'}).fill("ram ranjan ojha");
        await page.getByRole('textbox', {name: 'Clear the text'}).fill("ram ranjan ojha");

        
    })


});