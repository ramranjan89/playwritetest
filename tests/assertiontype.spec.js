const {test, expect}= require('@playwright/test');

test('assertion types 1:', async ({page})=>

    {
 await page.goto('https://demo.nopcommerce.com/register');
 //*assertion type 1: to validate the URL of the page.  page has URl
   await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

// *assertion to check if page have the title and validate the title of the page.
await page.waitForLoadState('networkidle');  // ?wait till the all api call get completed.
await expect(page).toHaveTitle("nopCommerce demo store. Register");
//* assertion to validate the visible element on the page. It could be any element.
await expect(page.locator(".header-logo img")).toBeVisible(); 
const imgtxt = await page.locator(".header-logo img").getAttribute('alt'); // ~~ to get the image text capture.
 // ! fetching a element where html Tags "alt" or "src" attributes, fetch thode value by getAttribute method.
console.log(imgtxt);

    });

    test.only('assertion type 2:', async ({page})=>
    {
   await page.goto('https://demo.automationtesting.in/Register.html');
   //* Assertion to validate radio button is checked or not.
     const radiobtn= await page.locator("input[value='Male']");
     await expect(page.locator("input[value='Male']")).toBeEnabled();
     await page.locator("input[value='Male']").check();
     await expect(page.locator("input[value='Male']")).toBeChecked();
     await page.locator("input[value='Male']").click();   
     // ! next will validate with check box:
     const checkbox= await page.locator("input[value='Cricket']");
     await expect(checkbox).toBeEnabled();
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        await expect(page.locator("input[value='Movies']")).not.toBeChecked();
        //* validate the is there attribute present or not.
        const webAttribute= await page.getByText("Submit");
        await expect(webAttribute).toHaveAttribute('type','submit');
        //! validate the text of the element. 
        const textvar= await page.getByText("Automation Demo Site").textContent();
        console.log(textvar);
        //await expect(textvar).toHaveText("Automation Demo Site"); //! this tohavetextonly we can use with pagelocator element
        const textvar2= await page.locator("div[class='col-sm-8 col-xs-8 col-md-8'] h1");
        await expect(textvar2).toHaveText("Automation Demo Site");
        //* validate the text of the element with partial text.
        await expect(textvar2).toContainText("Demo");
        const allWebEle= await page.locator("select[id$='Skills'] option").allTextContents();
        await expect(allWebEle).toHaveLength(78);  //* validate the length of the array.
        for(let ele of allWebEle)  //! printing all the elements of the array.
        {
            console.log(ele);
            if(ele==="Design")
            //! here we are typing to click on thee dropdown and select the value.
            await page.locator("select[id$='Skills'] option").selectOption({label: ele});
            break;
        }

    });
    
