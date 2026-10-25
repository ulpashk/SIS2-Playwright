import { Page, Locator } from '@playwright/test';

export class ProductPage {
  private addToCartButton: Locator;
  private cartButton: Locator;
  private productName: Locator;

  constructor(private page: Page) {
    this.addToCartButton = page.getByTestId('add-to-cart');
    this.cartButton = page.getByTestId('nav-cart');
    this.productName = page.getByRole('heading', { level: 1 });
  }

  async openHome() {
    await this.page.goto('/');
  }

  async goHome() {
    await this.page.getByTestId('nav-home').click();
  }

  async openProduct(productName: string) {
  await this.page
    .getByRole('heading', { name: productName, exact: true })
    .click();
}

  async addToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartButton.click();
  }

  async getProductName() {
    return (await this.productName.textContent())?.trim() || '';
  }

  async getProductPrice() {
    const priceText =
      (await this.page.getByText(/^\$\d+\.\d{2}$/).first().textContent()) || '';

    return Number(priceText.replace('$', '').trim());
  }
}