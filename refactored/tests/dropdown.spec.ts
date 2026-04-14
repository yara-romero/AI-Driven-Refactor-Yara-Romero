import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

test('Verify dropdown selection using POM', async ({ page }) => {
  const dropdownPage = new DropdownPage(page);

  await dropdownPage.navigate();
  await dropdownPage.selectOption('2');

  await expect(await dropdownPage.getSelectedValue()).toBe('2');
});