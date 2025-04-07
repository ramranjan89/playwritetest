// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';
import { TIMEOUT } from 'dns';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config= ({
  //timeout: 10000,
  testDir: './tests-examples', 
//tesstdir will which test need to be run as . what test to choose to execute
// right now by default indicating project levvel test dirctory.
//timeout:9000, //! this is the default timeout for the test case.
// by default timeout in playwrite is 30 second. if we want to increase then 
//use this command to increase the timeout. or else no need.
expect:
{
  timeout: 3000, // assertion time out that we declare
},
reporter: [
  ['html', { open: 'never' }],
  ['junit', { outputFile: 'test-results/results.xml' }], // this will generate the junit report in the test-results folder.
],
//reporter: [['html', { open: 'never' }], ['list'], ['json']], //!reporter is used to generate the report in the html format list and json are used to generate the report in the list and json format.],
//reporter is used to generate the report in the html format.
fullyParallel: true, // Run all tests in parallel
   // Retries failed tests (useful for flaky tests)
  // Limit parallel workers in CI/CD
  forbidOnly: !!process.env.CI, //!this is used to fail the test case(only tag) if it is not run in CI/CD.
  //forbidOnly: true, // another way to write it.
  retries: process.env.CI ? 1 : 0, //!this is used to retry the test case if it fails.
  //retries: 1, // another way to write it.
  workers: process.env.CI ? 1 : undefined, //!this is used to limit the number of parallel workers in CI/CD.
  //? undefined means it will run all the test cases in parallel. we can give the number of workers as well.
use:
{
//this use is a object we will decalre browser.
browserName: 'chromium',
// to set the browser in headless/headed mode.
headless: true,
//to take the screenshot of the test case.
screenshots: 'only-on-failure', //* this will take the screenshot of the test case. if we want to take the screenshot of the test case then we can use this command. option are on off and retry.
video: 'retain-on-failure', // this will take the video of the test case. if we want to take the video of the test case then we can use this command. option are on off and retry.

//?trace: 'on', this will trace the logs of the test case. consume memoery so will use another method:
trace: 'off', // in this case only failuer test case will have screenshot and traces.
},

projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  // {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },
  // {
  //   name: 'brave',
  //   use: { ...devices['Desktop Chrome'] }, // Playwright doesn't have a separate 'Brave' device
  // },
  // {
  //   name: 'mobile chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
]
});
module.exports= config;

