import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Verify login with valid credentials using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
});