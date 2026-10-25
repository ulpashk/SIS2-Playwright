import { test } from '../fixtures/pages.fixture';

test('known email shows password reset confirmation', async ({
  resetPasswordPage,
}) => {
  await resetPasswordPage.open();

  await resetPasswordPage.submitEmail(
    'customer@practicesoftwaretesting.com'
  );

  await resetPasswordPage.expectSuccessMessage();
});

test('invalid email shows an error', async ({
  resetPasswordPage,
}) => {
  await resetPasswordPage.open();

  await resetPasswordPage.submitEmail(
    'notexistinguser12345@example.com'
  );

  await resetPasswordPage.expectInvalidEmailError();
});