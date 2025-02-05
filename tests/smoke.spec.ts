// Smoke test for the app

import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('should have the correct title', async ({ page }) => {
  const expectedTitle = 'Asset Grow - Investment Calculator';
  await expect(page).toHaveTitle(expectedTitle);
});

test('should have the correct header', async ({ page }) => {
  const expectedHeader = 'Asset Grow!';
  const actualHeaderNav = page.locator('header nav strong');
  await expect(actualHeaderNav).toContainText(expectedHeader);
});
