const { test, expect } = require('@playwright/test');

test('play with checkbox and radio button:', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  // Select all checkbox elements
  const allcheckbox = await page.locator("div[class='col-md-4 col-xs-4 col-sm-4'] input[type='checkbox']");
 
  
  const checkboxCount = await allcheckbox.count(); // Get the number of checkboxes

  // Iterate over each checkbox
  for (let i = 0; i < checkboxCount; i++) {
    const checkbox = allcheckbox.nth(i);

    // Validate checkbox is visible, enabled, and not checked
    await expect.soft(checkbox).toBeVisible();
    await expect.soft(checkbox).toBeEnabled();
    await expect.soft(checkbox).not.toBeChecked();

    // Check the checkbox
    await checkbox.check();
    

    // Validate that the checkbox is checked after interaction
    await expect.soft(checkbox).toBeChecked();
  }
  
});