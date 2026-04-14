import { test, expect } from '@playwright/test';

test('Legacy Login Test with hardcoded selectors', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.locator('input[type="text"]').fill('tomsmith');
  await page.locator('input[type="password"]').fill('SuperSecretPassword!');
  await page.locator('button[type="submit"]').click();

  const message = await page.locator('#flash').textContent();
  await expect(message).toContain('You logged into a secure area!');
});