import { test, expect } from '../fixtures/pages.fixture';

test('user can compare two products by name and price', async ({ productPage }) => {
  await productPage.openHome();

  await productPage.openProduct('Combination Pliers');
  const firstProductName = await productPage.getProductName();
  const firstProductPrice = await productPage.getProductPrice();

  await productPage.goHome();

  await productPage.openProduct('Pliers');
  const secondProductName = await productPage.getProductName();
  const secondProductPrice = await productPage.getProductPrice();

  expect(firstProductName).toBe('Combination Pliers');
  expect(secondProductName).toBe('Pliers');
  expect(firstProductName).not.toBe(secondProductName);

  expect(firstProductPrice).toBeGreaterThan(secondProductPrice);
});