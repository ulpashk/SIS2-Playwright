# AI Review

## What AI Generated

AI helped me create the initial project structure, Page Object classes, fixtures, test files, and assertions for the required Playwright scenarios.

The AI also suggested how to organize:
- tests
- pages
- fixtures
- test data
- Playwright configuration

## How I Reviewed the AI Output

I checked the generated code by running each test separately and then running all tests together.

I also used Playwright Codegen and Inspector to find the actual locators from the website instead of trusting generated locators.

## Changes I Made

1. Registration locators were corrected using the real `data-test` values from the website.

2. The registration form was updated after I found additional fields such as city, state, and house number.

3. The registration password was changed because the first password was rejected as a leaked password.

4. The password generator was changed again because some generated characters were not allowed by the website.

5. The product test originally used a generated product ID. I replaced it with a more stable locator based on the product name.

6. The compare-products test originally matched several products containing the word “Pliers”. I changed it to exact matching using the heading name.

7. The login and buy-product tests initially used the same shared account and sometimes failed during parallel execution. I changed the valid login test to create its own user and used a different seeded user for the purchase test.

8. The number of Playwright workers was reduced to 2 because the application is public and shared by many users.

9. I added real assertions for:
- successful login
- login error
- successful registration
- successful payment
- product comparison
- forgot-password confirmation
- invalid email error

## Final Result

The final suite contains 7 automated tests.

All 7 tests pass when the full suite is executed together.