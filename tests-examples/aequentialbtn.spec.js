import {test, expect} from '@playwright/test';

test('Form Fill & Sequential Button Press', async ({ page }) => {
    test.setTimeout(90000); //?Set timeout for this test case
    await page.goto('https://ultimateqa.com/filling-out-forms/');
    await page.getByPlaceholder("Name").first().type('This is a test message');
    await page.locator('#et_pb_contact_message_0').type('tesxt content');
    await page.getByRole('button', { name: 'Submit' }).first().click();

    await page.goto('https://www.google.co.in/');
    await page.getByRole('combobox', { name: 'Search' }).pressSequentially('ramranjanjha89', {delay:400});
    await page.getByRole('combobox', { name: 'Search' }).press("arrowdown+arrowdown", {delay:400});
    await page.getByRole('combobox', { name: 'Search' }).press("Enter", {delay:400});
    await page.waitForTimeout(4000);

})
