import {expect, test} from '@playwright/test';

test('autowait test', async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.getByRole('button', {name: 'Button Triggering AJAX Request'}).click();

    const ajaxtext= page.locator('.bg-success');
    
    //await ajaxtext.click(); //click auto wait till the element is visible
    // textAjax= await ajaxtext.textContent();
    //console.log(textAjax);
    //await ajaxtext.waitFor({state: "attached"}); // this will wait till the element is attached to the dom.
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata'); // this will wait till the response is received.
    await page.waitForSelector('.bg-success'); // this will wait till the locator element is visible.
    const txt1= await ajaxtext.allTextContents();   // such kind of method not support auto wait.
    await expect(txt1).toContain('Data loaded with AJAX get request.');
    console.log("these are all alternative wait to wait for the element to be visible.")



})