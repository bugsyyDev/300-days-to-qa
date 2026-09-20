import { test, expect } from '@playwright/test';

test('логін з валідними даними', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // заповнити поле
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  // перевірити, що елемент з'явився
  await expect(page.locator('.flash.success')).toBeVisible();

  // перевірити текст на сторінці
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area');
});

test('логін з невалідними даними', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('wronguser');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpass');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.flash.error')).toBeVisible();
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
});