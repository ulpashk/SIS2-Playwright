import { Page, Locator } from '@playwright/test';

export class ProductPage {
  private addToCartButton: Locator;
  private cartButton: Locator;
  private productName: Locator;
  private productPrice: Locator;

  constructor(private page: Page) {
    this.addToCartButton = page.getByTestId('add-to-cart');
    this.cartButton = page.getByTestId('nav-cart');
    this.productName = page.getByRole('heading', { level: 1 });
    this.productPrice = page.getByTestId('unit-price');
  }

  async openHome() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    const firstCard = this.page.locator('.card').first();
    try {
      await firstCard.waitFor({ state: 'visible', timeout: 15_000 });
    } catch {
      await this.page.reload({ waitUntil: 'domcontentloaded' });
      await firstCard.waitFor({ state: 'visible', timeout: 15_000 });
    }
  }

  async goHome() {
    await this.page.getByTestId('nav-home').click();
  }

  async openProduct(productName: string) {
    const heading = this.page.getByRole('heading', {
      name: productName,
      exact: true,
    });
    await heading.waitFor({ state: 'visible', timeout: 15_000 });
    await heading.click();
  }

  async getProductName(): Promise<string> {
    await this.productName.waitFor({ state: 'visible' });
    return (await this.productName.innerText()).trim();
  }

  async getProductPrice(): Promise<number> {
    await this.productPrice.waitFor({ state: 'visible' });
    const rawText = (await this.productPrice.innerText()).trim();
    const numericMatch = rawText.replace(',', '.').match(/[\d.]+/);
    return numericMatch ? parseFloat(numericMatch[0]) : Number.NaN;
  }

  async addToCart() {
    await this.addToCartButton.waitFor({ state: 'visible' });
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}
