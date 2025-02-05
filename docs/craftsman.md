# Craftsman Document: Asset Grow

A web application for calculating and visualizing compound interest growth over time, focusing on code quality and maintainability.

## Code style improvements

### Component Organization

```text
- Create src/components/layout/ folder
  - Move header.component.ts and footer.component.ts to layout folder
  - Update imports in main.ts
- Create src/components/calculator/ folder
  - Move calculator related components
- Create src/components/table/ folder
  - Move table.component.ts and table-page.component.ts
- Create src/components/summary/ folder
  - Move summary related components
```

### Type Safety Enhancements

```text
- Enhance src/models/ folder
  - Add index.ts barrel file
  - Add strict interfaces for all types
  - Add readonly modifiers to prevent mutations
  - Create type guards for validation
```

### Function Organization

```text
- Enhance src/utils/ folder
  - Create utils/formatters/ for currency and date functions
  - Create utils/validators/ for input validation
  - Add utils/constants.ts for app constants
  - Add index.ts barrel file
- Enhance src/logic/ folder
  - Create logic/calculators/ for computation functions
  - Create logic/mappers/ for data transformations
  - Implement Result pattern for error handling
  - Add TSDoc documentation
```

### State Management

```text
- Create src/logic/store/ folder
  - Add investment.store.ts for central state
  - Implement pub/sub pattern for updates
  - Add type-safe action creators
```

### Component Architecture

```text
- Enhance component structure
  - Split each component into view/logic files
  - Create shared components for common UI elements
  - Add error boundaries
  - Implement loading states
```

## E2E tests

### 1_compound_calculator.spec.ts

```text
- Create tests/1_compound_calculator.spec.ts
  - Add data-testid attributes to form inputs and results
  - Given a user visits the calculator page
    When they enter valid investment data
    Then they should see the calculated results
  - Given invalid input
    When the form is submitted
    Then error messages should be displayed
  - Arrange test data with inputAmount, inputRate, inputYears
  - Act with form interactions using role selectors
  - Assert results match expectedTotal, expectedInterest
```

### 2_investment_table.spec.ts

```text
- Create tests/2_investment_table.spec.ts
  - Add data-testid attributes to table elements
  - Given calculated investment results
    When viewing the table
    Then yearly breakdowns should be displayed
  - Given the table is displayed
    When clicking column headers
    Then results should be sorted
  - Arrange test data with inputInvestment
  - Act with table interactions using role selectors
  - Assert table content matches expectedResults
```

### 3_investment_summary.spec.ts

```text
- Create tests/3_investment_summary.spec.ts
  - Add data-testid attributes to summary elements
  - Given a completed calculation
    When viewing the summary
    Then key metrics should be displayed
  - Given updated input values
    When recalculating
    Then summary should update
  - Arrange test data with inputInvestment
  - Act with form submissions using role selectors
  - Assert metrics match expectedSummary
```

## Release documentation

### Version Control

```text
- Update package.json version following semver
- Generate CHANGELOG.md entries:
  feat: Implement compound interest calculator
  feat: Add investment table with yearly breakdown
  feat: Create investment summary view
  test: Add e2e test suite
  docs: Add component and setup documentation
```

### Release Tags

```text
- Create release tag v1.0.0
- Include release notes from CHANGELOG.md
- Document breaking changes if any
- List new features and improvements
- Add setup and testing instructions
```

### Documentation Updates

```text
- Create docs/SETUP.md
  - Development environment setup
  - Build and deployment instructions
  - Environment configuration
```

### Component Documentation

```text
- Create docs/components/
  - Document component hierarchy
  - Document props and events
  - Add usage examples
```

### Testing Guide

```text
- Create docs/TESTING.md
  - Document GWT pattern usage
  - Explain AAA test structure
  - Document selector strategies
  - Add CI/CD integration guide
```

### Architecture Documentation

```text
- Update docs/ARCHITECTURE.md
  - Add detailed component flow
  - Document state management
  - Add performance considerations
```
