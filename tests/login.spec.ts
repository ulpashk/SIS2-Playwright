import { test, expect } from '../fixtures/pages.fixture';
import { createNewUser } from '../data/user.factory';

test('valid credentials open the account page', async ({
  registerPage,
  loginPage,
  page,
}) => {
  const user = createNewUser();

  // Arrange: create a unique user for this test
  await registerPage.open();
  await registerPage.register(user);

  // Act: log in with the newly created account
  await loginPage.open();
  await loginPage.login(user.email, user.password);

  // Assert
  await expect(page).toHaveURL(/\/account/);
});

test('invalid credentials show an error', async ({ loginPage }) => {
  await loginPage.open();

  await loginPage.login(
    'notexistinguser12345@example.com',
    'WrongPassword123!'
  );

  await loginPage.expectLoginError();
});