const { test, expect } = require('@playwright/test');

test('first test case', async ({browser})=>

{
const context= await browser.newContext()
const page =await context.newPage();
await page.goto("https://www.youtube.com/");
})

test('test case only test', async ({page})=>
{
   await page.goto('https://demoqa.com/webtables');
const mywebtitle= await page.title();
console.log(mywebtitle);
//expect is used to validate the title of the page. this is playwrite assertion.
//if the title is not matched then it will throw the error.
//to use expect we need to import expect from the playwrite/test.
await expect(page).toHaveTitle("DEMOQA");
await page.locator("input#searchBox").fill("test");
await page.locator(".input-group-text").click();
    
})


test('capture text test case:', async ({page})=>

   {
      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
   
      const textfetch= await page.locator("a.blinkingText");
      //to fetch any text content we can use textContent() method.
      //also we can use innerText() to fetch that.
      const textis= await textfetch.textContent();
      console.log(textis);
      // to validate the text we can use expect with toContain method. see the next code:
      await expect(textfetch).toContainText("Free Access to InterviewQues/ResumeAssistance/Material") // here we can pass partial text as well which atsrt with the text
   })

   test('dynamic case test:', async ({page})=>
{
   await page.goto('https://sso.teachable.com/secure/9521/identity/login/password');
   await page.locator("a[id='login-with-password-link']").click();
   await page.locator("input[type='email']").fill("ram");

   await page.locator("input[type='password']").fill("ram123");
   await page.locator("button[type='submit']").click();
   const dynamic_Text= await page.locator("span[class='text-with-icon']");
   console.log(await dynamic_Text.textContent());
   await expect(dynamic_Text).toContainText("Invalid email or password.");
   console.log("Test case passed successfullyy");
});

test('amazon test covering:', async ({page})=>
   {
      const username ="9108411969";
      const password="8271554461@r";
      const url= "https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Flog-in%2Fs%3Fk%3Dlog%2Bin%26ref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
      await page.goto(url);
      await page.locator("input[type='email']").fill(username);
      await page.locator("input[type='submit']").click();
      await page.locator("input[type='password']").fill(password);
      await page.locator("#signInSubmit").click();
      //Here we will get error Error: locator.textContent: Error: strict mode violation: locator('#nav-tools a') resolved to 4 elements:
      // if there will be mutiple web element locating on this same path then playwrite will give error:
       //console.log(await page.locator("#nav-tools a").textContent());
      //to avoide this we can use below code:
      //console.log(await page.locator("#nav-tools a").nth(1).textContent());
      const user= await page.locator("#nav-tools a div[class='nav-line-1-container']");
      console.log(await user.textContent());
      await expect(user).toContainText("Hello, ramranjan");
      console.log("login test and user correct user login validation Test case passed successfullyy");

   });
   
