import { test, expect } from "@playwright/test"

test('Dropdown', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown')

    const dropdown = page.getByRole('combobox')
    await dropdown.selectOption({ label: 'Option 1' })
    await expect(dropdown).toHaveValue('1') 
})