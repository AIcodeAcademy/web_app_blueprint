# Architecture Document: Asset Grow

Asset Grow is a web application for the general public that calculates compound interest to visualize investment growth over time.

## Main Features

1. `1_compound_calculator`

   - Input fields for initial investment amount
   - Input for interest rate
   - Input for investment period
   - Calculation of total growth and interest earned

2. `2_investment_table`

   - Year-by-year evolution table with columns:
     - Year number
     - Starting amount
     - Interest earned
     - End amount
     - Cumulative interest

3. `3_investment_summary`
   - Total final amount
   - Total interest earned
   - Growth percentage from initial investment

## Specifications

- **Interaction**: Web
- **Architecture**: Frontend only (static)
- **Database**: None
- **Authentication**: None
- **Integrations**: None
- **Presentation**: responsive, system color mode

## Tech Stack

- **Frontend**: TypeScript + Vite (simple)
- **Backend**: None
- **Database**: None
- **E2E Testing**: Playwright
- **Code Quality**: EsLint_Prettier
- **Styles**: PicoCSS

## Metadata

- **Date**: 2024-03-20
- **Author**: [Alberto Basalo](https://github.com/albertobasalo)
- **Company**: [AI code Academy](https://www.aicode.academy)

_End of Architecture Document for Asset Grow_
