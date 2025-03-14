const {test, expect} = require('@playwright/test');

test('calander picker', async ({page})=>
{

    const year= "2028";
    const month= "Nov";
    const date= "20";

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html");
    await page.locator("#third_date_picker").click();
    await page.locator(".ui-datepicker-year").selectOption(year);
    await page.locator(".ui-datepicker-month").first().waitFor();
    await page.locator(".ui-datepicker-month").selectOption(month);
    await page.locator(".ui-state-default").first().waitFor();
    await page.locator(".ui-state-default").nth(Number(date)-1).click(); 
    //here string getting converted to the number varibale data type covers
    console.log("date selected successfully");

})
