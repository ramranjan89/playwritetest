import {test, expect} from '@playwright/test';

test('selecting one option from multiple options', async ({page})=>

{
    await page.goto('https://letcode.in/selectable');
    const labelText= await page.getByText("Let's select 😉 all", {exact: true}).textContent();
    console.log(labelText);

    const allList= await page.locator('.list-container div').allTextContents();
    //console.log(allList);
    for(let list of allList)
    {

        console.log(list);

        if(list.includes("Protractor"))
            {
            await page.locator('.list-container div').nth(3).click();
            console.log("selected protector");
        break;
        }
    }
    await page.waitForTimeout(4000);

})
test('selecting all option', async ({page})=>

    {
        await page.goto('https://letcode.in/selectable');
        const labelText= await page.getByText("Let's select 😉 all", {exact: true}).textContent();
        console.log(labelText);
    
        const allList= await page.locator('.list-container div').allTextContents();
        //console.log(allList);
        for(let list of allList)
        {
             await page.locator(`.list-container div:has-text("${list}")`).click();
            console.log(`clicked on ${list}`);

        }
        await page.waitForTimeout(4000);
    
    })

    test.only('selecting option using keyboard', async ({page})=>

        {
            await page.goto('https://letcode.in/selectable');
            const labelText= await page.getByText("Let's select 😉 all", {exact: true}).textContent();
            console.log(labelText);
        
            const allList= await page.locator('.list-container div').allTextContents();
            //console.log(allList);
            for(let list of allList)
            {
                 await page.locator(`.list-container div:has-text("${list}")`).focus();
                 await page.keyboard.down("Enter");
                 await page.keyboard.press('Enter');
                 console.log(`clickon on the spot of the list ${list}`)
    
            }
            await page.waitForTimeout(4000);
        
        })
        