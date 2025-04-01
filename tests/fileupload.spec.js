import {test,expect} from '@playwright/test';

test('upload a file', async ({ page })=>
{
await page.goto('https://practice-automation.com/file-upload/');
await page.locator('input[type="file"]').setInputFiles('C:/playwrite project/tests/test-data/api testing doc.pdf');
await page.getByRole('button', {name: 'Upload'}).click();
//validating the response 
const sucessmessage= await page.locator('.wpcf7-response-output').textContent();
if(sucessmessage === 'Thank you for your message. It has been sent.')
{
await expect.soft(sucessmessage).toEqual("Thank you for your message. It has been sent.");
console.log("file uploaded sucessfully");
}
else
{
expect.soft(sucessmessage).toEqual("One or more fields have an error. Please check and try again.");
console.log("file not uploaded sucessfully");
}

})