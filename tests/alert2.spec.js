import {test, expect} from '@playwright/test';

test('Alert Handling @smoke', async ({ page }) => 
    {
       await page.on('dialog', async (dialog) => {
              console.log(dialog.message()); //! this will print the alert message in the console.
              await dialog.accept(); //! this will accept the alert.
              //await dialog.dismiss(); //! this will dismiss the alert.
              //await dialog.accept('ram ranjan'); //! this will accept the alert with the message.
       })
       page.on('request', request => {
        console.log('Request:', request.method(), request.url());
        console.log(request.allHeaders());
      });
      page.on('response', async response => {
        console.log('⬅️ Response:', response.status(), response.url());
        if (response.status() >= 400) {
          console.error('⚠️ Failed response detected!');
        }
      });
      
         await page.goto('https://practice-automation.com/popups/');
            await page.getByRole('button', { name: 'Alert Popup', exact:true }).click(); //! this will click on the button and open the alert.
            await page.waitForTimeout(4000); //! this will wait for 4 seconds.
            await page.getByRole('button', { name: 'Confirm Popup', exact:true }).click(); //* this will click on the button and open the confirm alert.
            await page.waitForTimeout(4000); //! this will wait for 4 seconds.
            await page.getByRole('button', { name: 'Prompt Popup', exact:true }).click(); //? this will click on the button and open the prompt alert.
            expect(await page.locator('#promptResult').textContent()).toContain('Fine, be that way...'); //?validation the prompt alert message.


    })