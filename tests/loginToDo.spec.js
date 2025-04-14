import {test, expect} from '@playwright/test';
import data1 from '../tests-data/login.json'


// data1.forEach((data) => {
// test(`Login to Do app ${data.test} `, async ({ page }) => {

//     await test.step('Open login page', async () => {
//         await page.goto('https://www.todoist.com/home');
//         await page.getByRole('link', { name: 'Log in' }).click();
//         await page.waitForLoadState('domcontentloaded');
//       });
       
//       await test.step('Fill credentials and login', async () => {
//         await page.getByPlaceholder('Enter your email...').fill(data.email, {delay: 2000});
//         await page.getByPlaceholder('Enter your password...').fill(data.password, {delay: 2000});
//         await page.getByRole('button', { name: 'Log in' }).click();
//         await expect(page).toHaveURL(/.*app.todoist.com/);
//       });


// });
// });


//! another way to read and write the data from json file:

for (let data of data1)
{

    test(`Login to Do app ${data.test} `, async ({ page }) => {

        await test.step('Open login page', async () => {
            await page.goto('https://www.todoist.com/home');
            await page.getByRole('link', { name: 'Log in' }).click();
            await page.waitForLoadState('domcontentloaded');
          });
           
          await test.step('Fill credentials and login', async () => {
            await page.getByPlaceholder('Enter your email...').fill(data.email, {delay: 2000});
            await page.getByPlaceholder('Enter your password...').fill(data.password, {delay: 2000});
            await page.getByRole('button', { name: 'Log in' }).click();
            await expect(page).toHaveURL(/.*app.todoist.com/);
          });
    
    
    });
}