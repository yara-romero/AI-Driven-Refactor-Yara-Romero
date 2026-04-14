import { Page, Locator } from '@playwright/test';

export class CheckboxesPage {
  readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox1 = page.locator('(//input[@type="checkbox"])[1]');
    this.checkbox2 = page.locator('(//input[@type="checkbox"])[2]');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  async checkFirst() {
    await this.checkbox1.check();
  }

  async uncheckSecond() {
    await this.checkbox2.uncheck();
  }

  async isFirstChecked() {
    return this.checkbox1.isChecked();
  }

  async isSecondChecked() {
    return this.checkbox2.isChecked();
  }
}