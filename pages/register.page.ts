import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  private firstName: Locator;
  private lastName: Locator;
  private dateOfBirth: Locator;
  private country: Locator;
  private postalCode: Locator;
  private houseNumber: Locator;
  private street: Locator;
  private city: Locator;
  private state: Locator;
  private phone: Locator;
  private email: Locator;
  private password: Locator;
  private registerButton: Locator;

  constructor(private page: Page) {
    this.firstName = page.getByTestId('first-name');
    this.lastName = page.getByTestId('last-name');
    this.dateOfBirth = page.getByTestId('dob');
    this.country = page.getByTestId('country');
    this.postalCode = page.getByTestId('postal_code');
    this.houseNumber = page.getByTestId('house_number');
    this.street = page.getByTestId('street');
    this.city = page.getByTestId('city');
    this.state = page.getByTestId('state');
    this.phone = page.getByTestId('phone');
    this.email = page.getByTestId('email');
    this.password = page.getByTestId('password');
    this.registerButton = page.getByTestId('register-submit');
  }

  async open() {
    await this.page.goto('/auth/register');
  }

  async register(user: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    country: string;
    postalCode: string;
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    phone: string;
    email: string;
    password: string;
  }) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.dateOfBirth.fill(user.dateOfBirth);
    await this.country.selectOption(user.country);
    await this.postalCode.fill(user.postalCode);
    await this.houseNumber.fill(user.houseNumber);
    await this.street.fill(user.street);
    await this.city.fill(user.city);
    await this.state.fill(user.state);
    await this.phone.fill(user.phone);
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    await Promise.all([
      this.page.waitForURL(/\/auth\/login/, { timeout: 15000 }),
      this.registerButton.click(),
    ]);
  }
}