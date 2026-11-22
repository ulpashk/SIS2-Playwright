import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private email: Locator;
  private password: Locator;
  private loginButton: Locator;
  private loginError: Locator;

  constructor(private page: Page) {
    this.email = page.getByTestId('email');
    this.password = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-submit');
    this.loginError = page.getByTestId('login-error');
  }

  async open() {
    await this.page.goto('/auth/login', { waitUntil: 'domcontentloaded' });
    try {
      await this.email.waitFor({ state: 'visible', timeout: 15_000 });
    } catch {
      await this.page.reload({ waitUntil: 'domcontentloaded' });
      await this.email.waitFor({ state: 'visible', timeout: 15_000 });
    }
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async expectLoginError() {
    await expect(this.loginError).toBeVisible();
  }
}
