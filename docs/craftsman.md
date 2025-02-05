# Craftsman Document: Asset Grow

A web application for calculating compound interest to visualize investment growth over time.

## Code style improvements

Based on code style rules for web and typescript

### Component Organization

```text
- Create subfolder structure in components:
  - src/components/calculator/
  - src/components/table/
  - src/components/summary/
- Move related components to their respective folders
- Update imports to reflect new structure
```

### Semantic HTML Enhancement

```text
- Add ARIA labels to all input fields
- Update calculator form with proper semantic structure
- Add roles to interactive elements
- Replace generic divs with semantic elements
```

### Type Safety Improvements

```text
- Create types for investment calculations in models/
- Add JSDoc comments to public functions
- Implement early returns in calculation functions
- Add type validation for user inputs
```

### Component Composition

```text
- Split large components into smaller, focused ones
- Move business logic to logic/ folder
- Create utility functions for common calculations
```

## E2E tests

Based on test rules

### Compound Calculator Tests

```text
- Create tests/1_compound_calculator.spec.ts
- Test input validation
- Test calculation accuracy
- Test form submission
```

### Investment Table Tests

```text
- Create tests/2_investment_table.spec.ts
- Test table rendering
- Test data accuracy
- Test sorting functionality
```

### Investment Summary Tests

```text
- Create tests/3_investment_summary.spec.ts
- Test total calculations
- Test percentage displays
- Test responsive behavior
```

## Release documentation

Based on docs and git rules

### Feature Documentation

```text
- Update CHANGELOG.md with new features
- Add JSDoc comments to all public functions
- Update OVERVIEW.md with new component structure
```

### Release Preparation

```text
- Update version in package.json
- Create release tag
- Document breaking changes
- Update test documentation
```

### Code Quality Documentation

```text
- Document code style decisions
- Add component interaction diagrams
- Document type system usage
```
