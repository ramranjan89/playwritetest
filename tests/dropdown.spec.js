const {test, expect}= require('@playwright/test');

test('play with dropdown:', async ({page})=>

{
 await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');

  const allValue= await page.locator("div[class='dataTables_info']");
   await allValue.click();

  await expect.soft(allValue).toHaveCount(3);
  const textContent= await allValue.allTextContents();
  const valueLenght= await textContent.length;
  console.log(valueLenght);
  await expect.soft(allValue).toBeVisible();
  await expect.soft(allValue).toBeEnabled();
  //await allValue.selectOption({index: 2});   //* selecting a drop down using index of that element
  //await allValue.selectOption({label: "3"}); //! selecting a drop down using label or visible text of that element.
  //await allValue.selectOption('5'); //! selecting a drop down using value or visible text of that element.
  for(let val of textContent)
  
    {
    
        await allValue.selectOption({label: val});
        console.log(await page.locator("div[class='dataTables_info']").innerText());
    }
})

test.only('play with multiple dropdown:', async ({page})=>

    {
        await page.goto('https://ej2.syncfusion.com/demos/#/fluent2/multi-select/default.html');
        const allValue= await page.locator("select#box option");
        const box= page.locator("div[class$='e-multi-select-wrapper']");
        await box.nth(3).click();
        const allGames= await allValue.allTextContents();
        console.log(allGames);
       
    })