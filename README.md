OrangeHRM Playwright Automation Framework
Project Overview

This project demonstrates web automation testing using Playwright and JavaScript on the OrangeHRM demo application.

Tech Stack
JavaScript
Playwright
Page Object Model (POM)
GitHub Actions CI/CD
HTML Reporting
Test Scenarios
Valid Login
Invalid Login
Empty Username
Empty Password
Project Structure

orangehrm-playwright-js

├── pages

│ └── LoginPage.js

├── tests

│ └── login.spec.js

├── .github

│ └── workflows

│ └── playwright.yml

├── playwright.config.js

└── package.json

Run Test

npx playwright test

Run Chromium Only

npx playwright test --project=chromium

Generate HTML Report

npx playwright show-report

Features
Automated UI Testing
Page Object Model (POM)
HTML Test Reports
Screenshot on Failure
Video Recording on Failure
GitHub Actions CI/CD Integration