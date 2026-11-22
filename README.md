# SIS 2 — Test Automation with Playwright

## Project Overview

This project contains automated tests for the Practice Software Testing website using Playwright and TypeScript.

Website:
https://practicesoftwaretesting.com

## Automated Test Cases

1. Register a new customer
2. Log in with valid and invalid credentials
3. Buy a product
4. Compare two products
5. Reset a password

## Project Structure

- `tests/` — automated test specifications
- `pages/` — Page Object Model classes
- `fixtures/` — shared Playwright fixtures
- `data/` — test data factories
- `screenshots/` — execution evidence

## Installation

```bash
npm install
npx playwright install
## CI & Parallel Execution (GitHub Actions)

[![Playwright Tests](https://github.com/ulpashk/SIS2-Playwright/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/ulpashk/SIS2-Playwright/actions/workflows/playwright.yml)

- Pull Request: `#1` (`feat/ci-setup` -> `main`)
- Sharding & Reports: 4 parallel matrix shards (`workers: 1` in CI), blob report merging via `merge.config.ts` into a unified HTML report, plus JUnit and failure artifacts.

| Configuration | `Run Playwright tests` Step | Run Link |
| :--- | :--- | :--- |
| 1 shard (`1/1`) | `103s` | https://github.com/ulpashk/SIS2-Playwright/actions/runs/45050716692 |
| 4 shards (`1/4`..`4/4`) | `65s` | https://github.com/ulpashk/SIS2-Playwright/actions/runs/45051002897 |

Splitting test execution across 4 parallel shards reduces the test execution step time from `103s` to `65s` while keeping `workers: 1` per shard and merging blob reports into a single HTML report.
