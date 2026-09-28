import { test, expect } from '@playwright/test';

test.describe('Digest Authentication', () => {
  const url = 'https://the-internet.herokuapp.com/digest_auth';

  test('allows access with correct credentials', async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'admin', password: 'admin' },
    });
    const page = await context.newPage();

    await page.goto(url);

    await expect(page.getByText('Congratulations')).toBeVisible();

    await context.close();
  });

  test('denies access with wrong credentials', async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'wronguser', password: 'wrongpass' },
    });
    const page = await context.newPage();

    const response = await page.goto(url);

    expect(response?.status()).toBe(401);

    await context.close();
  });
});