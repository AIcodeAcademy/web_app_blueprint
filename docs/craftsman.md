# Craftsman Document: Asset Grow

A web application for calculating and visualizing compound interest growth over time, focusing on code quality and maintainability improvements.

## Code style improvements

Based on code style rules for web and typescript

### Semantic HTML Structure

```text
- src/components/calculator.component.ts
  - Replace <div class="calculator"> with <article id="calculator" aria-label="compound interest calculator">
  - Update form element: <form id="compound-form" role="form" aria-label="investment calculator">
  - Add input attributes:
    - <input type="number" id="amount" name="amount" min="0" step="100" required aria-label="initial investment amount">
    - <input type="number" id="rate" name="rate" min="0" max="100" step="0.1" required aria-label="interest rate">
    - <input type="number" id="years" name="years" min="1" max="100" step="1" required aria-label="investment period">

- src/components/table.component.ts
  - Structure table with proper semantics:
    <table id="investment-table" aria-label="yearly investment breakdown">
      <thead>
        <tr>
          <th scope="col" aria-sort="none">Year</th>
          <th scope="col" aria-sort="none">Starting Amount</th>
          <!-- ... other headers -->
        </tr>
      </thead>
      <tbody>
        <!-- dynamic content -->
      </tbody>
    </table>

- src/components/summary.component.ts
  - Update structure:
    <article id="investment-summary">
      <header>
        <h2>Investment Summary</h2>
      </header>
      <section aria-label="key investment metrics">
        <!-- metrics content -->
      </section>
    </article>
```

### Type Safety Enhancements

```text
- src/models/investment.type.ts
  - export type SortDirection = 'asc' | 'desc'
  - export type SortableField = 'year' | 'startAmount' | 'interest' | 'endAmount' | 'cumulativeInterest'
  - export type Investment = {
      readonly amount: number;
      readonly rate: number;
      readonly years: number;
    }
  - export type ValidationResult = {
      readonly isValid: boolean;
      readonly message?: string;
    }

- src/models/yearly-result.type.ts
  - export type YearlyResult = {
      readonly year: number;
      readonly startAmount: number;
      readonly interest: number;
      readonly endAmount: number;
      readonly cumulativeInterest: number;
    }
```

### Function Organization

```text
- src/utils/calculator.function.ts
  /**
   * Validates investment input parameters
   * @param investment The investment parameters to validate
   * @returns ValidationResult with isValid flag and optional error message
   */
  export function validateInvestment(investment: Investment): ValidationResult {
    if (investment.amount <= 0) return { isValid: false, message: "Amount must be positive" };
    if (investment.rate < 0 || investment.rate > 100) return { isValid: false, message: "Rate must be between 0 and 100" };
    if (investment.years < 1) return { isValid: false, message: "Years must be at least 1" };
    return { isValid: true };
  }

- src/logic/investment.function.ts
  - export const handleFormSubmit = (event: Event) => {
      event.preventDefault();
      const formData = getFormData(event);
      const validation = validateInvestment(formData);
      if (!validation.isValid) return showError(validation.message);
      const result = calculateInvestment(formData);
      displayResult(result);
    }
```

## E2E tests

Based on test rules

### Compound Calculator Tests

```text
- tests/1_compound_calculator.spec.ts
  test('should calculate compound interest correctly', async ({ page }) => {
    // Given a user visits the calculator page
    await page.goto('/');

    // When they input valid investment data
    await page.getByLabel('initial investment amount').fill('1000');
    await page.getByLabel('interest rate').fill('5');
    await page.getByLabel('investment period').fill('10');
    await page.getByRole('button', { name: 'Calculate' }).click();

    // Then they should see the correct result
    const result = await page.getByTestId('final-amount').textContent();
    expect(result).toBe('1,628.89');
  });
```

### Investment Table Tests

```text
- tests/2_investment_table.spec.ts
  - Test table rendering
  - Test sorting functionality
  - Test data accuracy
  - Test row calculations
```

### Investment Summary Tests

```text
- tests/3_investment_summary.spec.ts
  - Test summary calculations
  - Test display formatting
  - Test percentage calculations
```

## Release documentation

Based on docs and git rules

### Initial Setup Documentation

```text
- docs/SETUP.md
  - Document development environment setup
  - List required dependencies
  - Add npm scripts documentation

- CHANGELOG.md
  - Add initial version entry
  - Document feature implementations
```

### Feature Documentation

```text
- docs/features/compound-calculator.md
  - Document calculation formulas
  - Add validation rules
  - Include usage examples

- docs/features/investment-table.md
  - Document table structure
  - Add sorting functionality
  - Include column descriptions

- docs/features/investment-summary.md
  - Document metrics calculation
  - Add formatting rules
```

### Release Notes

```text
- Version: 1.0.0
- Tag: v1.0.0
- Commit message: feat: initial release of Asset Grow calculator
- CHANGELOG.md updates:
  - Add Features section
  - Add Technical Improvements section
  - Add Testing Coverage section
```
