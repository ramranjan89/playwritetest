import {test, expect} from '@playwright/test';

test('Frame Handling', async ({ page }) => {

    await page.goto('https://practice-automation.com/iframes/');
    const frame1= await page.frameLocator('iframe[name= "top-iframe"]');
    await frame1.locator(':text("Get started")').click(); //! this will click on the button in the frame.
    
})
test.only('Frame Handling @type2 @UI', async ({ page }) => {

    await page.goto('https://practice-automation.com/iframes/');
    const frame2= await page.frames();
    console.log(frame2.length, frame2[0].url(), frame2[1].url(), frame2[2].url());

    for(let frame of frame2){
      console.log(frame.url()); 
    }  
    await page.frame({url: 'https://playwright.dev/'}).locator(':text("Get started")').click(); //! this will click on the button in the frame.
    
})