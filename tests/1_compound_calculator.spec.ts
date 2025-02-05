import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Compound Calculator Feature', () => {
  test('should show initial form values', async ({ page }) => {
    // Given the calculator page is loaded
    await expect(page.getByRole('tab', { name: 'Calculator' })).toBeVisible();

    // When I view the form inputs
    const inputAmount = page.getByRole('spinbutton', { name: 'Initial Amount' });
    const inputRate = page.getByRole('spinbutton', { name: 'Annual Interest Rate' });
    const inputYears = page.getByRole('spinbutton', { name: 'Investment Period' });

    // Then they should have default values
    await expect(inputAmount).toHaveValue('10000');
    await expect(inputRate).toHaveValue('7.5');
    await expect(inputYears).toHaveValue('10');
  });

  test('should validate input fields', async ({ page }) => {
    // Given the calculator page is loaded
    const inputAmount = page.getByRole('spinbutton', { name: 'Initial Amount' });

    // When I enter an invalid amount
    await inputAmount.fill('-100');

    // Then it should show validation error
    const errorMessage = page.getByRole('alert', { name: /Initial Amount/ });
    await expect(errorMessage).toContainText('must be at least 0');
    await expect(inputAmount).toHaveAttribute('aria-invalid', 'true');
  });

  test('should calculate investment growth', async ({ page }) => {
    // Given valid investment inputs
    const inputAmount = page.getByRole('spinbutton', { name: 'Initial Amount' });
    const inputRate = page.getByRole('spinbutton', { name: 'Annual Interest Rate' });
    const inputYears = page.getByRole('spinbutton', { name: 'Investment Period' });
    const expectedAmount = 10000;
    const expectedRate = 5;
    const expectedYears = 5;

    // When I enter values and submit
    await inputAmount.fill(expectedAmount.toString());
    await inputRate.fill(expectedRate.toString());
    await inputYears.fill(expectedYears.toString());
    await page.getByRole('button', { name: 'Calculate' }).click();

    // Then it should show the results
    const results = page.getByRole('region', { name: 'Investment calculation results' });
    await expect(results).toBeVisible();
    await expect(results).toContainText('Final Amount');
    await expect(results).toContainText('Total Interest Earned');
  });

  test('should handle calculation errors', async ({ page }) => {
    // Given invalid investment inputs
    const inputAmount = page.getByRole('spinbutton', { name: 'Initial Amount' });
    await inputAmount.click();
    await inputAmount.press('Backspace');
    await inputAmount.press('0');
    await inputAmount.press('.');
    await inputAmount.press('0');

    // When I try to calculate
    await page.getByRole('button', { name: 'Calculate' }).click();

    // Then it should show error message with retry option
    const errorAlert = page.getByRole('alert', { name: /Investment calculation error/i });
    await expect(errorAlert).toContainText('Invalid amount');
    const retryButton = page.getByRole('button', { name: 'Try Again' });
    await expect(retryButton).toBeVisible();
  });

  test('should enable navigation after calculation', async ({ page }) => {
    // Given a successful calculation
    const inputAmount = page.getByRole('spinbutton', { name: 'Initial Amount' });
    await inputAmount.fill('10000');
    await page.getByRole('button', { name: 'Calculate' }).click();

    // When I check the navigation tabs
    const tableTab = page.getByRole('tab', { name: 'Breakdown' });
    const summaryTab = page.getByRole('tab', { name: 'Summary' });

    // Then they should be enabled
    await expect(tableTab).not.toBeDisabled();
    await expect(summaryTab).not.toBeDisabled();
  });
});
