import { test, expect } from "@playwright/test"

test('Add/Remove Elemements', async ({page})=> {

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')

    const addButtom = page.getByRole('button', { name: 'Add Element' })
    await addButtom.click()

    const deleteButtons = page.getByRole('button', { name: 'Delete'})
    await expect(deleteButtons).toHaveCount(1)

    await deleteButtons.click()
    await expect(deleteButtons).toHaveCount(0)
})  