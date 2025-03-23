// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

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
  testDir: './tests',
//tesstdir will which test need to be run as . what test to choose to execute
// right now by default indicating project levvel test dirctory.
timeout:40000,
// by default timeout in playwrite is 30 second. if we want to increase then 
//use this command to increase the timeout. or else no need.
expect:
{
  timeout: 5000, // assertion time out that we declare
},
reporter: 'html',
//reporter is used to generate the report in the html format.
use:
{
//this use is a object we will decalre browser.
browserName: 'chromium',
// to set the browser in headless/headed mode.
headless: true,
//to take the screenshot of the test case.
screenshots: 'on',
//trace: 'on', this will trace the logs of the test case. consume memoery so will use another method:
trace: 'off', // in this case only failuer test case will have screenshot and traces.
},
});
module.exports= config;

