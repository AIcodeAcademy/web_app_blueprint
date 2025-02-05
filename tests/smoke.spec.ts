// Smoke test for the app

import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('should have the correct title', async ({ page }) => {
  const expectedTitle = 'Asset Growth Calculator';
  await expect(page).toHaveTitle(expectedTitle);
});

test('should have the correct header', async ({ page }) => {
  const expectedHeader = 'Asset Growth Calculator';
  await expect(page.getByRole('banner').getByRole('heading')).toContainText(expectedHeader);
});
