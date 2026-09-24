import { test, expect } from '@playwright/test'

test('A/B Testing', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/abtest')

  const heading = page.getByRole('heading', { level: 3 })
  await expect(heading).toContainText(/A\/B Test Variation 1|A\/B Test Control|No A\/B Test/)
})