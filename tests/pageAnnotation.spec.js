import {test, expect} from '@playwright/test';

test.skip("skip this test case@smoke @skip", async ({ page }) => {
console.log("this test case skip typed");
})

test("skip this test case tyoe 2 @smoke @skip", async ({ page }) => {
    test.skip(); //! this will skip the test case.
    console.log("this test case skip typed");

    })
test("skip this test case tyoe 3 @smoke @skip", async ({ page }) => {
    test.skip(true); //! this will skip the test case.
    console.log("this test case skip typed");

    })
    test('only this test case will run @smoke @skip', async ({ page }) => {
        console.log("this test case only passed");
    })


    test('only this test case will run 1 @smoke @skip', async ({ page }) => {
       // test.only(); //! this will only type the test case.
        console.log("this test case only passed type 1");
    })
    test('only this test case will run 2 @smoke @skip', async ({ page }) => {
        //test.only(true); //! this will only type the test case.
        console.log("this test case only passedtype 2");
    })
    test('fixme after devlopment @smoke 3 @skip', async ({ page }) => {
        test.fixme('fixme soon logic not implemented yet'); //! this will only type the test case.
        console.log("");
    })
    test('this test will get slow as per normal test', async ({ page }) => {
        test.slow(); //! this  test will get fix later
        test.setTimeout(90000); 
        console.log("this test case will fix laster on devlopment");
    })
    //? test step for better tracing the test case:
    test('test step for better tracing the test case', async ({ page }) => {
        test.step('step 1 @smoke @skip', async () => {   // step 1 block
            console.log("step 1 executed");
        })
        test.step('step 2 @smoke @skip', async () => {   //step 2 block
            console.log("step 2 executed");
        })
    })

    test('retry-aware test', async ({}, testInfo) => {
        if (testInfo.retry === 1) {
          console.log('Retry logic here');
        }
        expect(true).toBeTruthy();
      });test.use({ viewport: { width: 375, height: 812 } });


     test('mobile layout test 1', async ({ page }) => {
    test.use({ viewport: { width: 375, height: 812 } });
console ("using mobile layout test 1")
});

test.fail('fail his test case', async ({  page })=>

    {
console.log("this test case will fail");
    });
