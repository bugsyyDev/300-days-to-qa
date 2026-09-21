import { test, expect} from '@playwright/test'

test('Чекбокси', async ({ page }) =>{

    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    const first = page.getByRole('checkbox').first()
    await first.check()
    await expect(first).toBeChecked()

    const two = page.getByRole('checkbox').last()
    await two.uncheck()
    await expect(two).not.toBeChecked()
})