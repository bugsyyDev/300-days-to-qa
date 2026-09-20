import { test, expect } from '@playwright/test';

test('відкрити сторінку і перевірити заголовок', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});