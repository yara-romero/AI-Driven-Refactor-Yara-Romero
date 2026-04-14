import { test, expect } from '@playwright/test';

test('Legacy Checkboxes Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox1 = page.locator('(//input[@type="checkbox"])[1]');
  const checkbox2 = page.locator('(//input[@type="checkbox"])[2]');

  await checkbox1.check();
  await checkbox2.uncheck();

  expect(await checkbox1.isChecked()).toBeTruthy();
  expect(await checkbox2.isChecked()).toBeFalsy();
});