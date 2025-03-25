import {expect, test} from '@playwright/test';

test('autowait test', async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.getByRole('button', {name: 'Button Triggering AJAX Request'}).click();
    await page.locator('#content').click();


})