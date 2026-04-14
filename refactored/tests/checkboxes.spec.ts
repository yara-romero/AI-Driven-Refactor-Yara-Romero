import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

test('Verify checkboxes selection using POM', async ({ page }) => {
  const checkboxesPage = new CheckboxesPage(page);

  await checkboxesPage.navigate();
  await checkboxesPage.checkFirst();
  await checkboxesPage.uncheckSecond();

  await expect(await checkboxesPage.isFirstChecked()).toBeTruthy();
  await expect(await checkboxesPage.isSecondChecked()).toBeFalsy();
});