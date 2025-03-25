import {test, expect} from '@playwright/test';
import exp from 'constants';

test.beforeEach(async ({page})=>

    {
        await page.goto('https://letcode.in/test');

    })

    test.describe('input:assertion and timeout', ()=>
    
    {
        test.beforeEach('go to the input page and click', async ({page})=>
        {
    await expect(page.getByText("Edit")).toBeVisible();
    await expect(page.getByText("Edit")).toBeEnabled();
    await page.getByText("Edit").click();

        })


        test('input fieldmethods', async ({page})=>
        {
            const placeholderpath= page.getByPlaceholder('Enter first & last name');
            // ! get the placeholder attribute value. only pass the attribute name in string format:
            const  placeholderattirbute= await placeholderpath.getAttribute('placeholder');
            console.log(placeholderattirbute);
            // ! validate the placeholder attribute value. with exact match.
            expect(placeholderattirbute).toEqual("Enter first & last name");  //dont' return promis
            // * validate the placeholder attribute value. with partial match.
            expect(placeholderattirbute).toContain("Enter");// this also don't return promises
            // caputure the value of the input field. in case if empty and filled.
            const prefilledInput=  await placeholderpath.inputValue();
            console.log(`when field is empty then value is ${prefilledInput}`);
            // now adding value.
            await placeholderpath.fill("ram ranjan ojha", {dely: 500});
            //again capturing the value of input field.
            const prefilledInput1=  await placeholderpath.inputValue();
            console.log(prefilledInput1);
            //to clear the input field.
            //await placeholderpath.fill("");  we can pass empty string as well to clear the input field.
            await placeholderpath.clear();
            
        })
        test('capturing the test of the element', async ({page})=>
        {
            const textlocator= page.locator('.content ol li');
            // ! get the text of the element.
            const alltext= await textlocator.allTextContents();
            for(let text of alltext)
            {
                console.log(text);
                if(text==="getAttribute")
                {
                    expect(text).toContain("getAttribute");
                    console(`the element is matching ${text}`) // verify the text with partial match.
                }
                else if(text==="clear")
                {
                    expect.soft(text).toEqual("clear");
                    console.log(`element is matching ${text}`)  // verify the text with exact match.using soft assertion to fail
                }

            else{
                //await expect(text).toBe("isEnabled()");
                console.log(text, "element is visble") // if element is viisble or not.
            }
                

            }

        })



    })