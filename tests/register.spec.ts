import { test, expect } from '../fixtures/pages.fixture';
import { createNewUser } from '../data/user.factory';

test('new customer can register successfully', async ({ registerPage, page }) => {
  const user = createNewUser();

  await registerPage.open();
  await registerPage.register(user);

  await expect(page).toHaveURL(/\/auth\/login/);
});