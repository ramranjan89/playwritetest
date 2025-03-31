import {test,expect} from '@playwright/test';
import exp from 'constants';

test.skip('handel all alert tyes', async ({page})=>
{
await page.goto('https://letcode.in/alert');
const smapleAlert= page.getByRole('button', {name: 'Simple Alert'});
await expect(smapleAlert).toBeEnabled();
await expect(smapleAlert).toBeVisible();
await page.on('dialog', async dialog=>  //! enabling dailog handle and storing in dailog variable:
{
    await expect(dialog.type()).toContain('alert');   //? type is a method to check type of alert:
    await expect(dialog.message()).toContain('Hey! Welcome to LetCode'); //* message to validate the prompt message:
    await dialog.accept(); // this is to acceept any alert appear:
})
await smapleAlert.click();

})

test('handel Okay and cancel alert pop up', async ({page})=>
    {
    await page.goto('https://letcode.in/alert');
    const smapleAlert1= page.getByRole('button', {name: 'Confirm Alert'});
    await expect(smapleAlert1).toBeEnabled();
    await expect(smapleAlert1).toBeVisible();
    await page.on('dialog', async dialog=>  //! enabling dailog handle and storing in dailog variable:
    {
        await expect(dialog.type()).toContain('confirm');   //? type is a method to check type of alert:
        await expect(dialog.message()).toContain('Are you happy with LetCode?'); //* message to validate the prompt message:
        //await dialog.accept(); // this is to acceept any alert appear:
        await dialog.dismiss(); //!this is use to cancel button for alert:
    })
    await smapleAlert1.click();
    
    })

    test.only('handle prompt alert', async ({page})=>
        {
            const myName= "Ram Ranjan Ojha";
        await page.goto('https://letcode.in/alert');
        const smapleAlert2= page.getByRole('button', {name: 'Prompt Alert'});
        await expect(smapleAlert2).toBeEnabled();
        await expect(smapleAlert2).toBeVisible();

        await page.on('dialog', async dialog=>
        {
            expect(dialog.type()).toContain("prompt");
            expect(dialog.defaultValue()).toEqual("");
            expect(dialog.message()).toBe("Enter your name");
            dialog.accept(`${myName}`);

        })
        await smapleAlert2.click();
        const myNameCss=  await page.locator("#myName").textContent();
        console.log(myNameCss);
        await expect(myNameCss).toEqual(`Your name is: ${myName}`);



        })