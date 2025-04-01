import { test, expect} from '@playwright/test';
import exp from 'constants';


test('handling iframe', async ({ page })=>

{
   await page.goto('https://www.redbus.in/');
   await page.getByText("Account").first().click();
   const signInButton=  page.locator(':text-is("Login/ Sign Up")');
   await expect(signInButton).toContainText("Login");
   await signInButton.click();
   //!frames can me handle in multiple ways either with name or page locator:
   const loginFrame= await page.frameLocator('.modalIframe');
   //? if a frame has  anme and URL then we can create it like:
   const loginFrame1= page.frame({ url: /login?offerType=PaymentOffers&defaultSlide=home&isOnlyMobile=false/ });


   const loginscreentext=  await loginFrame.locator(':text-is("Sign in to avail exciting discounts and cashbacks!!")').first();
   expect(await loginscreentext.textContent()).toBe("Sign in to avail exciting discounts and cashbacks!!");
   await loginFrame.getByPlaceholder("Enter your mobile number").
   first().fill("91084111969", {delay: 300});
   await loginFrame.locator('#otp-container').click();
   //const frame2text= await loginFrame1.locator(':text-is("Connect using social accounts)').textContent();
   //console.log(frame2text);
   await page.waitForTimeout(3000);
})