import { test, expect } from '@playwright/test';

test('Legacy Dropdown Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  await page.locator('#dropdown').selectOption('2');
  const value = await page.locator('#dropdown').inputValue();

  expect(value).toBe('2');
});