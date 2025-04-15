import {test, expect} from '@playwright/test';

test.describe('Tags testing {tag: ["@UAT", "@sanity"]}', () => {

    test.beforeEach(async ({page}) => {
          await page.goto('https://demowebshop.tricentis.com/login');
          await page.getByRole('textbox', { name: 'Email:' }).fill('ramranjanjha1994@gmail.com');
          await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
          await page.getByRole('textbox', { name: 'Password:' }).fill('8271554461@r');
          await page.getByRole('button', { name: 'Log in' }).click();
          await expect(page.getByText('Login was unsuccessful.')).toBeVisible();
          await expect(page.getByText('The credentials provided are')).toBeVisible();
          await page.getByRole('textbox', { name: 'Password:' }).click();
          await page.getByRole('textbox', { name: 'Password:' }).fill('8271554461@rR');
          await page.getByRole('button', { name: 'Log in' }).click();
          await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
          
    })
        test('UI verification @smoke', async ({page}) => 

        {
        await page.locator('#small-searchterms').click();
        await page.locator('#small-searchterms').fill('book');
        await page.getByRole('button', { name: 'Search' }).click();
        await expect(page.getByRole('link', { name: 'Health Book', exact: true })).toBeVisible();
        });

        test('UI verification 2 @UI @smoke', async ({page}) =>
        { 

        await page.getByRole('link', { name: 'Computers' }).first().hover();
        await page.getByRole('link', { name: 'Notebooks' }).first().click();

        await page.locator('#products-orderby').selectOption('https://demowebshop.tricentis.com/notebooks?orderby=5');
        await page.goto('https://demowebshop.tricentis.com/notebooks?orderby=5');
        });



})