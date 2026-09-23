import { test, expect} from '@playwright/test'

test("Notification Message", async ({page}) => {

   await page.goto('https://the-internet.herokuapp.com/notification_message_rendered')

   const link = page.getByText('Click here')
   await link.click()

   const message = page.locator('#flash')
   await expect(message).toBeVisible()
})