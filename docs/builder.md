# Builder Document: Asset Grow

A web application that calculates compound interest to visualize investment growth over time.

## 1_compound_calculator

Basic compound interest calculator with input fields and result display.

### Data Structures

```text
- src/models/investment.type.ts
  - Create type Investment = { amount: number; rate: number; years: number }
  - Create type InvestmentResult = { finalAmount: number; totalInterest: number }
```

### Utility Functions

```text
- src/utils/investment.function.ts
  - Create validateInvestment(input: Investment): boolean
  - Create formatCurrency(amount: number): string
- src/utils/calculator.function.ts
  - Create calculateCompoundInterest(investment: Investment): InvestmentResult
```

### Business Logic Functions

```text
- src/logic/investment.function.ts
  - Create computeInvestment(input: Investment): InvestmentResult
```

### UI Components

```text
- src/components/compound-form.component.ts
  - Create renderCompoundForm(): HTMLFormElement
  - Add input validation with early returns
  - Add error messages display
- src/components/result-display.component.ts
  - Create renderResultDisplay(result: InvestmentResult): HTMLElement
```

### User Interactions

```text
- src/components/calculator.component.ts
  - Create renderCalculator(): HTMLElement
  - Handle form submission with named handlers
  - Update display with results
```

## 2_investment_table

Detailed year-by-year breakdown of the investment growth.

### Data Structures

```text
- src/models/yearly-result.type.ts
  - Create type YearlyResult = {
      year: number;
      startAmount: number;
      interest: number;
      endAmount: number;
      cumulativeInterest: number;
    }
```

### Utility Functions

```text
- src/utils/table.function.ts
  - Create calculateYearlyResults(investment: Investment): YearlyResult[]
  - Create sortYearlyResults(results: YearlyResult[], field: keyof YearlyResult): YearlyResult[]
```

### Business Logic Functions

```text
- src/logic/table.function.ts
  - Create generateYearlyBreakdown(investment: Investment): YearlyResult[]
```

### UI Components

```text
- src/components/table.component.ts
  - Create renderTable(results: YearlyResult[]): HTMLTableElement
  - Create renderTableRow(result: YearlyResult): HTMLTableRowElement
```

### User Interactions

```text
- src/components/table-page.component.ts
  - Create renderTablePage(): HTMLElement
  - Handle sorting with named handler functions
  - Add column header click handlers
```

## 3_investment_summary

Overview of investment results with key metrics.

### Data Structures

```text
- src/models/summary.type.ts
  - Create type Summary = {
      finalAmount: number;
      totalInterest: number;
      growthPercentage: number;
    }
```

### Utility Functions

```text
- src/utils/summary.function.ts
  - Create calculateGrowthPercentage(initial: number, final: number): number
  - Create formatPercentage(value: number): string
```

### Business Logic Functions

```text
- src/logic/summary.function.ts
  - Create computeSummary(investment: Investment, result: InvestmentResult): Summary
```

### UI Components

```text
- src/components/summary.component.ts
  - Create renderSummary(summary: Summary): HTMLElement
  - Create renderMetric(label: string, value: string): HTMLElement
```

### User Interactions

```text
- src/components/summary-page.component.ts
  - Create renderSummaryPage(): HTMLElement
  - Handle data updates with named handlers
```

---
