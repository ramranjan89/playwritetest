import {test, expect} from '@playwright/test';
import exp from 'constants';

test('automate mouse operations:',  async ({page})=>

{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //let's  verify that text input box is empty before copy the element:
    const inputFiedl= page.locator('#field2');
    await expect(inputFiedl).toBeEditable();
    await expect(inputFiedl).toBeEmpty();
    await expect(inputFiedl).toBeTruthy();
    await page.getByRole('button', {name: "Copy Text"}).dblclick();
    await page.waitForTimeout(4000);
    //! now will validate if the double click perfrom and text get copied in the the text box.
    await expect.soft(inputFiedl).toBeEmpty();
    const inputValue= await inputFiedl.inputValue();
    await expect.soft(inputValue).toBe("Hello World!");
    await expect.soft(inputFiedl).toHaveValue("Hello World!");
})

test('drag and drop', async ({ page })=>

{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const draggsource= page.locator("#draggable");
    const dropsource = page.locator('#droppable');
    await draggsource.dragTo(dropsource);
    await page.waitForTimeout(4000);
})

test('drag and drop using mouse operation', async ({ page })=>

    {
        await page.goto('https://letcode.in/droppable');
        const draggsource= page.locator("#draggable");
        const dropsource = page.locator('#droppable');
        await draggsource.hover();  //! ponitng to the drag location
        await page.mouse.down();
        await dropsource.hover();  //! pointing to the drop location
        await page.mouse.up();
        await page.waitForTimeout(3000);
    })

    test('multiple file upload', async ({ page })=>
    
    {
        await page.goto('https://testautomationpractice.blogspot.com/');
        const fileUploader= page.locator('#multipleFilesInput');
        await fileUploader.setInputFiles([
            "C:/playwrite project/tests/test-data/api testing doc.pdf",
            "C:/playwrite project/tests/test-data/ram.txt"]);
        await page.getByRole('button', {name: 'Upload Multiple Files'}).click();
        await expect.soft(await fileUploader.textContent()).toContain("");
        await expect.soft(await fileUploader.textContent()).toContain("");
        await page.waitForTimeout(4000);
    })