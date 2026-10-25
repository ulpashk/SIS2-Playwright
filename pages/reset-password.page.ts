import { Page, Locator, expect } from '@playwright/test';

export class ResetPasswordPage {
  private forgotPasswordLink: Locator;
  private email: Locator;
  private submitButton: Locator;
  private successMessage: Locator;
  private invalidEmailError: Locator;

  constructor(private page: Page) {
    this.forgotPasswordLink = page.getByTestId('forgot-password-link');
    this.email = page.getByTestId('email');
    this.submitButton = page.getByTestId('forgot-password-submit');

    this.successMessage = page.getByText('page.forgot-password.confirm');
    this.invalidEmailError = page.getByText('The selected email is invalid.');
  }

  async open() {
    await this.page.goto('/auth/login');
    await this.forgotPasswordLink.click();
  }

  async submitEmail(email: string) {
    await this.email.fill(email);
    await this.submitButton.click();
  }

  async expectSuccessMessage() {
    await expect(this.successMessage).toBeVisible();
  }

  async expectInvalidEmailError() {
    await expect(this.invalidEmailError).toBeVisible();
  }
}