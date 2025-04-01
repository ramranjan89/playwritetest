import {test, expect} from '@playwright/test';
const name= 'ramranjan ';
const lname= 'ojha';
const email= 'ram@rigi.club';
const phNo=  "9108411969";
const Country = "India";

test('fill the form and submit', async ({ page })=>


{
 await page.goto('https://letcode.in/forms');
 await page.getByPlaceholder("Text input").first().fill(name);
 await page.getByPlaceholder("Text input").nth(1).fill(lname);
 await page.getByRole('textbox', {name: 'email'}).clear();
 await page.getByRole('textbox', {name: 'email'}).fill(email);
 const countrycode= await page.locator('.is-half div').nth(6).allInnerTexts();
 const seletdropdown1= page.locator('.is-half div').nth(6);
 //console.log(countrycode);
 for(let code of countrycode)
 {
    if(code.includes("India"))
    {
        await seletdropdown1.click();
        //await seletdropdown1.selectOption("India (+91)"); //! this is not under select tag so this will not work
        await page.keyboard.type("India (+91)"); //? using keyboard operations:
        await page.keyboard.press('Enter');
        //console.log(`selected country code must be ${code}`);
        break;
    }
 }

    await page.getByPlaceholder("Phone Number").fill(phNo);
    await page.getByPlaceholder("Address Line-1").fill("hsr");
    await page.getByPlaceholder("Address Line-2").fill("Bangaluru");
    await page.getByPlaceholder("State").fill("karnataka");
    await page.getByPlaceholder("Postal-Code").fill("560069");
    const country= await page.locator('.is-half div').nth(18).allInnerTexts();
    console.log(country);
    for(let count of country)
    {

        if(count.includes("India"))
        {

        await page.keyboard.type("India", {delay:300});
        await page.keyboard.press('Enter');
        break;
        }
    }
    await page.getByRole('radio', {name: 'Male', exact:true}).check();
 await page.waitForTimeout(3000);
})