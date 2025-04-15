import { test } from '../Fixtures/customefixture';


test.describe('ClickUp Login Test @smoke', () => {

    test('Login to ClickUp', async ({ page, login, fillfrom}) => {
        test.setTimeout(60000);
        test.slow();
    
            await page.goto('https://app.clickup.com/login');
            await page.getByPlaceholder('Enter your work email').pressSequentially(login.email, {delay: 100});
            await page.getByPlaceholder('Enter password').fill(login.password);
            await page.getByRole('button', { name: 'Log In', exact: true}).click();
            await page.waitForLoadState('networkidle');
            await page.getByRole('button', { name: 'New status', exact: true }).click();
            await page.locator('[data-test="editable__input"]').fill(fillfrom.statusName)
            .keyboard('Enter');
            await page.locator('[data-test="task-list-footer-inline-menu"]').click();
           
           
    })

})