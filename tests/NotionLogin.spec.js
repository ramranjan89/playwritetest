import {test, expect} from '@playwright/test';
import fs from 'fs';  //? importing file-system module to read and write the file.
import { parse } from 'csv-parse/sync';

const userInput= parse(fs.readFileSync('tests-data/Testdata1.csv'), {
    
    columns: true,
    skip_empty_lines: true,

})

 userInput.forEach((userInput) =>
{
    test(`notion app testing using csv file ${userInput.CaseNo}`, async ({page})=>
       {
        await test.setTimeout(15000);
        await test.slow();
        //* step: 1
        await test.step('opne the url in web broswer', async()=> //! redirect to the website.
        {
        await page.goto('https://www.notion.com/');
        await page.getByRole('link', { name: 'Log in' }).click();
        });
        //* step: 2
        await test.step('fill the email and password', async()=>  //!login process.
        {
        await page.getByPlaceholder('Email address').fill(userInput.username);
        await page.getByRole('button', { name: 'Continue', exact: true }).click();
        await page.getByPlaceholder('Password').fill(userInput.password);
        await page.getByRole('button', { name: 'Continue with password' }).click();

        });
})
})