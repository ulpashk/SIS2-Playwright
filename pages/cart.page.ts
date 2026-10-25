import { Page, Locator } from '@playwright/test';

export class CartPage {
  private proceed1: Locator;
  private proceed2: Locator;

  constructor(private page: Page) {
    this.proceed1 = page.getByTestId('proceed-1');
    this.proceed2 = page.getByTestId('proceed-2');
  }

  async continueToCheckout() {
    await this.proceed1.click();

    if (await this.proceed2.isVisible()) {
      await this.proceed2.click();
    }
  }
}