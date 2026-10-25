import { test, expect } from '../fixtures/pages.fixture';

test('customer can buy a product successfully', async ({
  loginPage,
  productPage,
  cartPage,
  checkoutPage,
  page,
}) => {
  await loginPage.open();

  await loginPage.login(
  'customer2@practicesoftwaretesting.com',
  'welcome01'
);

  // Wait until login is really completed
  await expect(page).toHaveURL(/\/account/);

  await productPage.openHome();

  await productPage.openProduct('Combination Pliers');

  await productPage.addToCart();
  await productPage.openCart();

  await cartPage.continueToCheckout();

  await checkoutPage.fillBillingAddress();
  await checkoutPage.completePayment();

  await checkoutPage.expectPaymentSuccess();
});