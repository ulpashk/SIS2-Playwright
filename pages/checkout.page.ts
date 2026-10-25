import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  private country: Locator;
  private postalCode: Locator;
  private houseNumber: Locator;
  private street: Locator;
  private city: Locator;
  private state: Locator;
  private proceed3: Locator;
  private paymentMethod: Locator;
  private finishButton: Locator;

  constructor(private page: Page) {
    this.country = page.getByTestId('country');
    this.postalCode = page.getByTestId('postal_code');
    this.houseNumber = page.getByTestId('house_number');
    this.street = page.getByTestId('street');
    this.city = page.getByTestId('city');
    this.state = page.getByTestId('state');
    this.proceed3 = page.getByTestId('proceed-3');
    this.paymentMethod = page.getByTestId('payment-method');
    this.finishButton = page.getByTestId('finish');
  }

  async fillBillingAddress() {
    await this.country.selectOption('KP');
    await this.postalCode.fill('123456');
    await this.houseNumber.fill('55');
    await this.street.fill('Seoul');
    await this.city.fill('Seoul');
    await this.state.fill('Incheon');
    await this.proceed3.click();
  }

  async completePayment() {
    await this.paymentMethod.selectOption('cash-on-delivery');
    await this.finishButton.click();
  }

  async expectPaymentSuccess() {
    await expect(
      this.page.getByText('Payment was successful')
    ).toBeVisible();
  }
}