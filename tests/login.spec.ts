import loginData from '../testdata/loginData.json';
import { test, expect } from '@playwright/test';

test('Valid Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.validUser.username);
  await page.locator('[data-test="password"]').fill(loginData.validUser.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
});
test('Invalid Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(loginData.invalidUser.username);
  await page.locator('[data-test="password"]').fill(loginData.invalidUser.password);

  await page.locator('[data-test="login-button"]').click(); 

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Empty Password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


test('Empty username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
