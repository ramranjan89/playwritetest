const { test, expect } = require('@playwright/test');
const { Console } = require('console');

test('locator with different methods', async ({page})=>

{

    page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator("div.form-group input[name='name']").fill("ram");
    await page.locator("div.form-group input[name='email']").fill("ram@rigi.club");
    await page.getByPlaceholder("Password").fill("123456");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    const dropdown_ele= await page.locator("select[class$='form-control']");
    await dropdown_ele.selectOption("Male");
    console.log("step 1: -----dropdown selected");
    await page.getByLabel("Employed").click();


})

test('multiple dropdown method', async ({page})=>

    {
    await page.goto("https://testpages.eviltester.com/styled/validation/input-validation.html");
    const dropdown= await page.locator("#country");
    await dropdown.selectOption("China");
    await dropdown.selectOption({index:10});
    await dropdown.selectOption({value:"Egypt"});
    })

    test('handel ui elemnts with special locators', async ({page})=>

        {
        page.goto("https://rahulshettyacademy.com/client");
        await page.getByPlaceholder("email@example.com").fill("ramranjanjha1994@gmail.com");
        await page.getByPlaceholder("enter your passsword").fill("8271554461@rR");
        await page.getByRole("button", {name:"Login"}).click();
        await page.locator(".card-body").first().waitFor();
        await page.locator(".card-body").filter({hasText: "IPHONE 13 PRO"})
        .getByRole("button",{name: "Add To Cart"}).click();

        //here 4 button will matvh with cart text but filter that not has  " add to cart" text
        await page.getByRole("button",{name: "Cart"}).filter({hasNotText: "Add To Cart"}).click();
        //putting assertion to validate the cart item
        await expect(page.getByText("IPHONE 13 PRO")).toBeVisible();
        console.log("product added to cart successfully");
        await page.getByText("Checkout").click();
        //await page.locator(".payment__shipping ").getByRole("textbox", {name:"text"}).fill("ramranjanjha1994@gmail.com");
        //pressSequentially() use to do keyboard actions.
        await page.getByPlaceholder("Select Country").pressSequentially("ind");
        await page.getByRole('button',{name:"India"}).nth(1).click();
        await page.getByText("Place Order").click();
        await expect(page.getByText("Thankyou for the order.")).toBeVisible();
        console.log("Order placed successfully");


        })


