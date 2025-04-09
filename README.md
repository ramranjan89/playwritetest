✅ What's Covered in This Repo?
🔰 Playwright Basics
Installing and setting up Playwright

Running tests in headless/headful modes

Cross-browser testing (Chromium, Firefox, WebKit)

Playwright configuration (playwright.config.ts)

Folder structure for scalable projects

🧪 UI Test Automation
Writing and executing basic UI tests

Assertion strategies using Playwright test

Handling sync/async behavior

Managing test hooks (beforeEach, afterEach)

Custom fixtures for Page Object Model (POM)

Parallel test execution using multiple workers

🔍 Locator Practice & Strategies
Using page.locator(), getByRole, getByText, getByLabel, getByPlaceholder

Chained locators and filtering with .nth(), .first(), .last()

Handling complex nested elements

Hover, click, fill, and input actions

Dropdowns, checkboxes, radio buttons

File uploads & downloads

Wait strategies (waitForSelector, expect.toBeVisible() etc.)

🚀 How to Run Tests
Install dependencies

bash
Copy
Edit
npm install
Run all tests

bash
Copy
Edit
npx playwright test
Run specific test

bash
Copy
Edit
npx playwright test tests/login.spec.ts
View HTML report

bash
Copy
Edit
npx playwright show-report
📌 Key Learnings & Use Cases
Strong grip over Playwright locator engine

Built reusable POM with custom fixtures

Implemented cross-browser tests

Worked on UI validations with precise locators

Integrated basic reporting using Playwright CLI

