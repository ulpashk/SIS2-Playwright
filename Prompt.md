# AI Prompt

## AI Tool

ChatGPT — GPT-5.6 Sol

## Prompt Used

Help me build SIS 2 using Playwright and TypeScript for the Practice Software Testing website.

Requirements:
- Use Page Object Model.
- Keep locators out of spec files.
- Use Playwright fixtures.
- Use unique test data where needed.
- Do not use waitForTimeout.
- Do not use CSS-class locators or positional XPath.
- Use meaningful assertions.
- Tests must be independent and able to run in parallel.

The required automated scenarios are:

1. Register a new customer
2. Log in with valid and invalid credentials
3. Buy a product
4. Compare two products
5. Reset a password

When a locator is unknown, do not invent it. I will provide the real locator from Playwright Codegen or Inspector.