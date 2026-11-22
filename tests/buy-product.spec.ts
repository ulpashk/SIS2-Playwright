import { test, expect } from '../fixtures/pages.fixture';
import { createNewUser } from '../data/user.factory';

test('customer can buy a product successfully', async ({
  registerPage,
  loginPage,
  productPage,
  cartPage,
  checkoutPage,
  page,
}) => {
  const user = createNewUser();

  await registerPage.open();
  await registerPage.register(user);
  await expect(page).toHaveURL(/\/auth\/login/);

  await loginPage.login(user.email, user.password);
  await expect(page).toHaveURL(/\/account/);

  await productPage.openHome();
  await productPage.openProduct('Pliers');

  await productPage.addToCart();
  await productPage.openCart();

  await cartPage.continueToCheckout();

  await checkoutPage.fillBillingAddress();
  await checkoutPage.completePayment();

  await checkoutPage.expectPaymentSuccess();
});
