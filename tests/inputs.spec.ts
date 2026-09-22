import { test, expect } from '@playwright/test'

test('Input', async ({ page }) => {
    
    await page.goto('https://the-internet.herokuapp.com/inputs')

    const input = page.getByRole('spinbutton')
    await input.fill('67')
    await expect(input).toHaveValue('67')
})