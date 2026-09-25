import { test, expect } from '@playwright/test';

test.describe('Dynamic Controls', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  });

  test('remove and add checkbox', async ({ page }) => {
    const checkbox = page.getByRole('checkbox');
    const removeButton = page.getByRole('button', { name: 'Remove' });
    const addButton = page.getByRole('button', { name: 'Add' });
    const message = page.locator('#message');

    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeEnabled();
    await expect(removeButton).toBeVisible();

    await removeButton.click();

    await expect(checkbox).toBeHidden();
    await expect(addButton).toBeVisible();
    await expect(message).toContainText("It's gone!");

    await addButton.click();

    await expect(checkbox).toBeVisible();
    await expect(removeButton).toBeVisible();
    await expect(message).toContainText("It's back!");
  });

  test('enable and disable input field', async ({ page }) => {
    const input = page.getByRole('textbox');
    const enableButton = page.getByRole('button', { name: 'Enable' });
    const disableButton = page.getByRole('button', { name: 'Disable' });
    const message = page.locator('#message');

    await expect(input).toBeVisible();
    await expect(input).toBeDisabled();
    await expect(enableButton).toBeVisible();

    await enableButton.click();

    await expect(input).toBeEnabled();
    await expect(disableButton).toBeVisible();
    await expect(message).toContainText("It's enabled!");

    await input.fill('smth');
    await expect(input).toHaveValue('smth');

    await disableButton.click();

    await expect(input).toBeDisabled();
    await expect(enableButton).toBeVisible();
    await expect(message).toContainText("It's disabled!");
  });
});