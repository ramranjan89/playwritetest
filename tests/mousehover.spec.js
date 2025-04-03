import {test, expect} from '@playwright/test';
import exp from 'constants';

test('mouse over action and cases', async ({page})=>

{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('button', {name: "Point Me"}).hover();
    await page.locator('.dropdown-content a').first().click();
    await page.getByRole('button', {name: "Point Me"}).hover();
    await page.locator('.dropdown-content a').last().click();
    await page.waitForTimeout(4000);
})

test('mouse over another ex:', async ({ page })=>
{

    await page.goto('https://practice-automation.com/hover/');
    await page.locator('#mouse_over').hover();
    const afterhovertextcahnges= await page.locator('#mouse_over').textContent();
    console.log(afterhovertextcahnges);
    await expect.soft(afterhovertextcahnges).toEqual('You did it!'); //check deep eqality
    await expect(afterhovertextcahnges).toContain('it!');
    await expect.soft(afterhovertextcahnges).toBe("You did it!"); //!check deep equality
}

)