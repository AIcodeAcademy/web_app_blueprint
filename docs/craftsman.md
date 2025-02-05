# Craftsman Document: Asset Grow

A web application for calculating compound interest growth, focusing on maintainable code organization and quality improvements.

## Code style improvements

Based on code style rules for web and typescript

### Component Organization

```text
- src/components/layout/
  - Create header.component.ts
    - Add semantic header with nav
    - Include aria-labels for navigation
  - Create footer.component.ts
    - Add semantic footer with links
    - Include attribution and version

- src/components/calculator/
  - Move compound-form.component.ts
  - Move result-display.component.ts
  - Update imports in calculator.component.ts

- src/components/table/
  - Move table.component.ts
  - Create table-header.component.ts
  - Create table-row.component.ts

- src/components/summary/
  - Move summary.component.ts
  - Create metric-card.component.ts
```

### Type Safety and Validation

```text
- src/models/validation.type.ts
  - Create type ValidationError = { field: string; message: string }
  - Create type ValidationResult = { isValid: boolean; errors: ValidationError[] }

- src/utils/validation.function.ts
  - Create validateAmount(amount: number): ValidationError[]
  - Create validateRate(rate: number): ValidationError[]
  - Create validateYears(years: number): ValidationError[]

- src/models/calculator.type.ts
  - Add readonly modifiers to all properties
  - Add branded types for Amount, Rate, and Years
```

### Error Handling

```text
- src/utils/error.function.ts
  - Create displayError(error: ValidationError): void
  - Create clearErrors(): void

- src/components/calculator/error-display.component.ts
  - Create renderError(error: ValidationError): HTMLElement
  - Add aria-live region for error messages
```

## E2E tests

Based on test rules

### Calculator Feature Tests

```text
- tests/1_compound_calculator.spec.ts
  - Test valid input calculations
  - Test input validation errors
  - Test form submission
  test('should validate investment amount', async ({ page }) => {
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
  test('should sort table by year', async ({ page }) => {
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
  test('should display correct growth percentage', async ({ page }) => {
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
  - Document component organization
  - Explain component communication
  - List available components

- src/utils/README.md
  - Document utility functions
  - Explain validation rules
  - List helper functions
```

### Feature Documentation

```text
- docs/features/
  - calculator.md
    - Document input constraints
    - Explain validation rules
    - List error messages
  - table.md
    - Document sorting behavior
    - Explain column calculations
  - summary.md
    - Document metric calculations
    - Explain percentage rules
```

### Release Notes

```text
- CHANGELOG.md
  feat: reorganize components into feature folders
  feat: add input validation with error messages
  feat: improve table sorting functionality
  test: add comprehensive e2e test suite
  docs: add component and utility documentation

- Version: 1.1.0
- Tag: v1.1.0
```
