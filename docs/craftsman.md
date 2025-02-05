# Craftsman Document: Asset Grow

A web application for calculating and visualizing compound interest growth over time, focusing on code quality and maintainability.

## Code style improvements

### Component Organization

```text
- Create src/components/layout/ folder
  - Move header.component.ts -> layout/header.component.ts
  - Move footer.component.ts -> layout/footer.component.ts
  - Update main.ts imports using relative paths
- Create src/components/calculator/ folder
  - Create calculator/compound-form.component.ts
  - Create calculator/result-display.component.ts
  - Create calculator/calculator-page.component.ts
- Create src/components/table/ folder
  - Move table.component.ts -> table/investment-table.component.ts
  - Move table-page.component.ts -> table/table-page.component.ts
- Create src/components/summary/ folder
  - Create summary/metrics-display.component.ts
  - Create summary/summary-page.component.ts
```

### Type Safety Enhancements

```text
- Enhance src/models/ folder
  - Create models/index.ts with exports
  - Create models/investment.interface.ts
    export interface Investment { amount: number; rate: number; years: number }
  - Create models/result.interface.ts
    export interface Result<T> { success: boolean; data?: T; error?: string }
  - Add readonly modifiers to all interfaces
  - Create models/guards.ts with type predicates
```

### Function Organization

```text
- Enhance src/utils/ folder
  - Create utils/formatters/currency.ts
    export const formatCurrency = (amount: number): string
  - Create utils/formatters/percentage.ts
    export const formatPercentage = (value: number): string
  - Create utils/validators/investment.ts
    export const validateInvestment = (input: Investment): Result<boolean>
  - Create utils/constants.ts
    export const MIN_AMOUNT = 100
    export const MAX_YEARS = 50
  - Create utils/index.ts with exports
- Enhance src/logic/ folder
  - Create logic/calculators/compound.ts
    export const calculateCompound = (input: Investment): Result<number>
  - Create logic/mappers/yearly-result.ts
    export const mapToYearlyResults = (input: Investment): YearlyResult[]
  - Create logic/store/investment.store.ts
    export class InvestmentStore extends EventTarget
```

### State Management

```text
- Create src/logic/store/investment.store.ts
  - Add InvestmentState interface
  - Implement subscribe(callback: (state: InvestmentState) => void)
  - Add dispatch(action: InvestmentAction): void
  - Create action creators for calculations
```

### Component Architecture

```text
- Enhance component structure
  - Split each component into:
    component-name.view.ts - HTML template
    component-name.component.ts - Logic and events
  - Create components/shared/error-boundary.ts
  - Create components/shared/loading-spinner.ts
  - Add data-testid attributes for testing
```

## E2E tests

### 1_compound_calculator.spec.ts

```text
- Create tests/1_compound_calculator.spec.ts
  - Add selectors:
    [data-testid="amount-input"]
    [data-testid="rate-input"]
    [data-testid="years-input"]
    [data-testid="calculate-button"]
    [data-testid="result-display"]
  - Test scenarios:
    describe('Compound Calculator')
      test('should calculate compound interest')
      test('should validate input fields')
      test('should display formatted results')
  - Use variables:
    const inputAmount = 1000
    const expectedTotal = 1610.51
```

### 2_investment_table.spec.ts

```text
- Create tests/2_investment_table.spec.ts
  - Add selectors:
    [data-testid="investment-table"]
    [data-testid="year-header"]
    [data-testid="amount-header"]
  - Test scenarios:
    describe('Investment Table')
      test('should display yearly breakdown')
      test('should sort by column click')
  - Use variables:
    const inputInvestment: Investment
    const expectedResults: YearlyResult[]
```

### 3_investment_summary.spec.ts

```text
- Create tests/3_investment_summary.spec.ts
  - Add selectors:
    [data-testid="total-amount"]
    [data-testid="total-interest"]
    [data-testid="growth-percentage"]
  - Test scenarios:
    describe('Investment Summary')
      test('should display investment metrics')
      test('should update on recalculation')
  - Use variables:
    const inputInvestment: Investment
    const expectedSummary: Summary
```

## Release documentation

### Version Control

```text
- Update package.json version to "1.0.0"
- Generate CHANGELOG.md entries:
  feat(calculator): implement compound interest calculator
  feat(table): add investment table with yearly breakdown
  feat(summary): create investment summary view
  test(e2e): add playwright test suite
  docs(api): add component documentation
```

### Release Tags

```text
- git tag -a v1.0.0 -m "Initial release"
- Include CHANGELOG.md entries in tag message
- Document features:
  - Compound interest calculator
  - Investment table
  - Investment summary
```

### Documentation Updates

```text
- Create docs/SETUP.md
  - npm install instructions
  - npm run dev for development
  - npm run build for production
  - npm run test:e2e for testing
```

### Component Documentation

```text
- Create docs/components/README.md
  - Document component props and events
  - Add code examples with TypeScript
  - Include accessibility attributes
```

### Testing Guide

```text
- Create docs/TESTING.md
  - Document GWT pattern with examples
  - Explain AAA pattern implementation
  - List all data-testid attributes
  - Document Playwright commands
```

### Architecture Documentation

```text
- Update docs/ARCHITECTURE.md
  - Add component dependency graph
  - Document state management flow
  - List performance optimizations
```
