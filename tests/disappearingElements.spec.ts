import { test, expect } from "@playwright/test"

test('base link are always visible after repload', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

    await page.reload()

    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();
})