# Craftsman Document: Asset Grow

A web application for calculating compound interest growth, focusing on maintainable code organization and quality improvements.

## Code style improvements

Based on code style rules for web and typescript

### Component Organization

```text
- src/components/layout/
  - header.component.ts
    export function renderHeader(): HTMLElement {
      const header = document.createElement('header');
      header.setAttribute('role', 'banner');
      // ... navigation menu
    }
  - footer.component.ts
    export function renderFooter(): HTMLElement {
      const footer = document.createElement('footer');
      footer.setAttribute('role', 'contentinfo');
      // ... links and version
    }

- src/components/calculator/
  - compound-form.component.ts -> calculator/form.component.ts
  - result-display.component.ts -> calculator/result.component.ts
  - calculator.component.ts (update imports)

- src/components/table/
  - table.component.ts (move from root)
  - table-header.component.ts
    export function renderTableHeader(onSort: (field: SortableField) => void): HTMLElement
  - table-row.component.ts
    export function renderTableRow(result: YearlyResult): HTMLElement

- src/components/summary/
  - summary.component.ts (move from root)
  - metric-card.component.ts
    export function renderMetricCard(label: string, value: string): HTMLElement
```

### Type Safety and Validation

```text
- src/models/validation.type.ts
  export type ValidationError = {
    readonly field: keyof Investment;
    readonly message: string;
  }
  export type ValidationResult = {
    readonly isValid: boolean;
    readonly errors: ValidationError[];
  }

- src/utils/validation.function.ts
  export function validateAmount(amount: number): ValidationError[] {
    const errors: ValidationError[] = [];
    if (amount <= 0) errors.push({ field: 'amount', message: 'Amount must be positive' });
    return errors;
  }
  // Similar for rate and years...

- src/models/calculator.type.ts
  export type Amount = number & { readonly brand: unique symbol };
  export type Rate = number & { readonly brand: unique symbol };
  export type Years = number & { readonly brand: unique symbol };
  export type Investment = {
    readonly amount: Amount;
    readonly rate: Rate;
    readonly years: Years;
  }
```

### Error Handling

```text
- src/utils/error.function.ts
  export function displayError(error: ValidationError): void {
    const errorElement = document.getElementById('error-display');
    if (!errorElement) return;
    errorElement.textContent = error.message;
  }
  export function clearErrors(): void {
    const errorElement = document.getElementById('error-display');
    if (!errorElement) return;
    errorElement.textContent = '';
  }

- src/components/calculator/error-display.component.ts
  export function renderErrorDisplay(): HTMLElement {
    const errorDisplay = document.createElement('div');
    errorDisplay.id = 'error-display';
    errorDisplay.setAttribute('role', 'alert');
    errorDisplay.setAttribute('aria-live', 'polite');
    return errorDisplay;
  }
```

## E2E tests

Based on test rules

### Calculator Feature Tests

```text
- tests/1_compound_calculator.spec.ts
  import { test, expect } from '@playwright/test';

  test('validates investment amount', async ({ page }) => {
    // Given the calculator page
    await page.goto('/');

    // When entering invalid amount
    await page.getByRole('spinbutton', { name: 'initial investment amount' }).fill('-100');
    await page.getByRole('button', { name: 'Calculate' }).click();

    // Then shows validation error
    const error = await page.getByRole('alert').textContent();
    expect(error).toContain('Amount must be positive');
  });
```

### Table Feature Tests

```text
- tests/2_investment_table.spec.ts
  import { test, expect } from '@playwright/test';
  import { fillValidInvestment } from './test-utils';

  test('sorts table by year', async ({ page }) => {
    // Given a populated investment table
    await page.goto('/');
    await fillValidInvestment(page);

    // When clicking year header
    await page.getByRole('columnheader', { name: 'Year' }).click();

    // Then table is sorted
    const firstYear = await page.getByRole('row').nth(1).getByRole('cell').first().textContent();
    expect(firstYear).toBe('1');
  });
```

### Summary Feature Tests

```text
- tests/3_investment_summary.spec.ts
  import { test, expect } from '@playwright/test';
  import { fillValidInvestment } from './test-utils';

  test('displays correct growth percentage', async ({ page }) => {
    // Given investment data
    await page.goto('/');
    await fillValidInvestment(page);

    // When calculation completes
    await page.getByRole('button', { name: 'Calculate' }).click();

    // Then shows correct percentage
    const growth = await page.getByTestId('growth-percentage').textContent();
    expect(growth).toMatch(/\d+\.\d+%/);
  });
```

## Release documentation

Based on docs and git rules

### Code Documentation

```text
- src/components/README.md
  # Components

  ## Organization
  - /layout - Page structure components
  - /calculator - Investment form and results
  - /table - Investment breakdown table
  - /summary - Investment metrics display

- src/utils/README.md
  # Utilities

  ## Validation
  - Amount: Must be positive number
  - Rate: Must be between 0-100%
  - Years: Must be positive integer
```

### Feature Documentation

```text
- docs/features/
  - calculator.md
    # Investment Calculator

    ## Validation Rules
    - Amount: > 0
    - Rate: 0-100
    - Years: >= 1

  - table.md
    # Investment Table

    ## Sorting
    - Click column header to sort
    - Toggles ascending/descending

  - summary.md
    # Investment Summary

    ## Calculations
    - Growth % = (Final - Initial) / Initial * 100
```

### Release Notes

```text
- CHANGELOG.md
  # Changelog

  ## [1.1.0] - 2024-03-21

  ### Added
  - Reorganized components into feature folders
  - Added input validation with error messages
  - Improved table sorting functionality

  ### Changed
  - Updated component file structure
  - Enhanced type safety with branded types

  ### Fixed
  - Error display accessibility

  ## [1.0.0] - 2024-03-20
  - Initial release
```
