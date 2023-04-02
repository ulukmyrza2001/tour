import { defineConfig, test } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'yarn start',
    url: '/',
    timeout: 120 * 1000,
  },
  use: {
    baseURL: 'http://localhost:3000/',
  },
})

test('test browser', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.pause()
})
