// Smoke test for the app

import { expect, test } from '@playwright/test';

test('should have the correct title', async ({ page }) => {
  await page.goto('/'); 
  const expectedTitle = "Vite + TS";
  await expect(page).toHaveTitle(expectedTitle);
});
