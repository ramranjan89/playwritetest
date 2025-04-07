import {test,expect} from '@playwright/test';

test('Mouse Operation', async ({page})=>

    {
     await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
     const addbtn= await page.getByRole('button', { name: 'Add Element' });
     for(let i=0; i<=5; i++){
        await addbtn.click();
     }
     
     const removebtn= await page.getByRole('button', { name: 'Delete' });
     const count= await removebtn.count();
     const allcontext=  await removebtn.allTextContents();
    //  for (let i = 0; i < count; i++) {
    //     await removebtn.click({ delay: 200 });
    //   }
    const btnArray = [];
     for (let i = 0; i < count; i++) 
        {
       btnArray.push(removebtn.nth(i)); //!push the button to the array.
          }

        for (const btn of btnArray) {
         await btn.click({ delay: 200 });  //? now using that array to click on the button.
        }
    })

    test.only('right click operation', async ({page})=>
    {
        await page.goto('https://ultimateqa.com/');

        await page.getByText('We mitigate downtime!', {exact: true}).click({ button: 'right' });
        await page.waitForTimeout(4000);

        

    })
    //!await page.locator('#myButton').dispatchEvent('click');
//     When to Use dispatchEvent
// ?This simulates a JavaScript event, not an actual user interaction (like click() does), so:

//? It bypasses some browser-level checks (like element visibility)
// You want to simulate internal JS events (not user interactions)

// You’re testing components that listen to custom events

// You’re mocking behavior where .click() or .fill() doesn’t trigger anything

