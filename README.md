# Playwright Automation Testing Project

## project overview

This project demonstrates automated testing of the SauceDemo web application using Playwright and TypeScript.

The project was developed to automate common user tasks such as login validation, cart operations, and page navigation. The primary aim of this project is to demonstrate automation testing concepts, test case design, external test data management, and project organization using Playwright.

## Reason for choosing sauce demo for testing

SauceDemo was selected because it is a stable web application specifically designed for software testing and automation practice. It provides basic functionalities such as login validation, product listing, cart operations, and navigation, making it perfectly suitable for implementing specified Playwright automation test cases.

---

## Tools and Technologies

* Playwright
* TypeScript
* Node.js
* Git
* GitHub
* Visual Studio Code

---

## Project Structure

```text
Playwright-Automation-project
│
├── tests
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── navigation.spec.ts
│
├── testdata
│   └── loginData.json
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

---

## Test Cases Implemented

### Login Testing

* Valid Login : when username and password is correct
* Invalid Login : either of the credentials are wrong
* Empty Username : username is missing or the field is empty
* Empty Password : password is missing or the field is empty

### Cart Testing

* Add Item to Cart
* Remove Item from Cart
* Verify Cart Badge Count

### Navigation Testing

* Open Cart Page
* Logout
* Verify Products Page Loads

---

## External Test Data

 The project uses external JSON data for test credential management.

Location:

```text
testdata/loginData.json
```

Separating test data from test scripts improves maintainability and allows easier modification of test inputs without changing the automation code.

---

## Need of Separate Test Files?

Test cases are organized according to their functionality.

* `login.spec.ts` contains login-related scenarios such as valid login , invalid login etc.
* `cart.spec.ts` contains cart-related scenarios such as adding item , removing item etc.
* `navigation.spec.ts` contains navigation-related scenarios such are moving from product page to cart page and from there to logout page etc.

This modular structure improves readability, maintainability, debugging, and project scalability.

---

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run login tests only:

```bash
npx playwright test tests/login.spec.ts
```

Run cart tests only:

```bash
npx playwright test tests/cart.spec.ts
```

Run navigation tests only:

```bash
npx playwright test tests/navigation.spec.ts
```

---

## Test Execution Result

Total Test Cases: 10

Passed: 10

Failed: 0

---


## Author

Ramkishore R
