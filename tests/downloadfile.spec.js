import {test,expect} from '@playwright/test';

test('download a a file', async ({ page })=>
{

await page.goto('https://practice-automation.com/file-download/');
// here don't put await so that click and event both execute parallaly:
const waitForDownloadEvent= page.waitForEvent("download"); //playwright wait for the downlaod event will occur
await page.locator('.download-on-click').click();
const savefile= await waitForDownloadEvent;
  await savefile.saveAs('./' + 'mydowwnloades13');// saving on this same projecct we use "./" to denote that file save in root folder.
})

test.skip('download file in another way', async ({ page })=>
{
    const mypath= 'C:/playwrite project/downloaded-files'
    await page.goto('https://practice-automation.com/file-download/');

    await page.locator('.wpdm-download-link').last().click();

    // Step 2: Wait for the password field to appear before filling
    const passwordField = await page.waitForSelector("input#password_67ea8288c55a8_921", { timeout: 10000 });
    await passwordField.fill('automateNow');

    // Step 3: Submit the password form
    await page.locator("input[type='submit']").click();

    // Step 4: Wait for the download event after successful password entry
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator('.wpdm-download-link').last().click() // Click again after entering password
    ]);

    // Step 5: Save the downloaded file
    const filePath = path.join(myPath, download.suggestedFilename());
    await download.saveAs(filePath);
     
    clickAndDownload.saveAs(mypath + "2ndsave");
})
