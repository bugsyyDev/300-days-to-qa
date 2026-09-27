import { test, expect } from '@playwright/test';

test('typos page displays correct text', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/typos');

  const paragraph = page.locator('.example p').nth(1);
  await expect(paragraph).toBeVisible();

  await expect(paragraph).toHaveText(
    "Sometimes you'll see a typo, other times you won't."
  );
});