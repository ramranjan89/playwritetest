import {test, expect} from '@playwright/test';


test.describe('Test Annotation suite', () => {

    test('slow annotation type', async ({ page }) => {
        test.slow(); //! When you mark a test as slow, Playwright will triple the timeout — so it becomes 90 seconds. defaukt is 30 seconds.
        await page.goto('https://letcode.in/button');
        await page.getByRole('button', { name: 'Goto Home and come back here' }).click();
        await page.goBack();

    })
    test('skip-annotation', async ({ page }) => {
        test.skip(); //! this will skip the test case.
    
        await page.goto('https://letcode.in/button');
        await page.getByRole('button', { name: 'Find Location' }).click();
        await expect(page.getByRole('button', { name: 'Find Location' })).toBeVisible({ timeout: 5000 });


    })
    test('test timeout to increse execution timeout', async ({ page }) => {

        test.setTimeout(90000); //! this will set the timeout to 9 seconds. for this test case only.

        await page.goto('https://letcode.in/radio');
        await page.getByText('Yes').first().click();
        await expect(page.getByText('Yes').first()).toBeChecked();
    })

    test('Fixme annoation to use under project', async ({ page }) => {
        test.fixme(true, 'fix me later'); //! this will mark the test case as fixme. it will not fail the test case but will mark it as fixme or skip as well.

        await page.goto('https://letcode.in/radio');
        const randomtext1= await page.getByRole('heading', { name: 'Radio & Checkbox' }).innerText();
        console.log(randomtext1);
    })
    
    test('to forcefully fail the test case', async ({ page }) => {

        test.fail(true, 'this need to be retest on prod env'); //! this will forcefully fail the test case.

        await page.goto('https://letcode.in/radio');
        const radioclicked= await page.getByText('Bar');
        await expect(radioclicked).toBeChecked(); //! this will fail the test case as the radio button is checked
    })



})

