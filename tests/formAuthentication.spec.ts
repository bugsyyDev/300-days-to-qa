import { test, expect } from "@playwright/test"

test('Успішний вхід', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login')

  await page.getByLabel('Username').fill('tomsmith')
  await page.getByLabel('Password').fill('SuperSecretPassword!')
  await page.getByRole('button', { name: 'Login' }).click()

  const message = page.locator('#flash')
  await expect(message).toContainText('You logged into a secure area!')
})

test('Невдалий вхід', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login')

  await page.getByLabel('Username').fill('wronguser')
  await page.getByLabel('Password').fill('wrongpass')
  await page.getByRole('button', { name: 'Login' }).click()

  const message = page.locator('#flash')
  await expect(message).toContainText('Your username is invalid!')
})