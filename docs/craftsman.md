# Craftsman Document: Asset Grow

A web application for calculating compound interest to visualize investment growth over time.

## Code style improvements

### Type improvements

```text
- Add type assertions for form data in calculator.component.ts
- Create a validation type for investment input in models/investment.type.ts
- Add return type annotations to all component functions
```

### Component improvements

```text
- Extract tab navigation logic from main.component.ts to a new navigation.function.ts
- Add ARIA labels for investment results in result-display.component.ts
- Add error boundary component for consistent error handling
- Add input validation feedback in compound-form.component.ts
```

### Accessibility improvements

```text
- Add ARIA live regions for dynamic content updates
- Improve keyboard navigation in tab system
- Add screen reader descriptions for investment metrics
```

---

## E2E tests

### Calculator feature

```text
- Create tests/1_compound_calculator.spec.ts
  - Test initial form values
  - Test input validation
  - Test calculation with different values
  - Test error handling for invalid inputs
```

### Investment table feature

```text
- Create tests/2_investment_table.spec.ts
  - Test table navigation
  - Test table content for different periods
  - Test table sorting functionality
  - Test table accessibility
```

### Investment summary feature

```text
- Create tests/3_investment_summary.spec.ts
  - Test summary metrics calculation
  - Test summary display format
  - Test navigation between views
  - Test data persistence between views
```

---

## Release documentation

### Feature documentation

```text
- Update docs/OVERVIEW.md with new component structure
- Add accessibility documentation
- Document validation rules and error handling
```

### Release notes

```text
- Update CHANGELOG.md with:
  - Type improvements
  - Component refactoring
  - Accessibility enhancements
  - Test coverage improvements
```

### Version update

```text
- Update package.json version to 1.1.0
- Add release tag v1.1.0
- Document breaking changes if any
```

---
