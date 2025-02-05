# Asset Grow - Investment Calculator

A web application for calculating compound interest and visualizing investment growth over time.

## Features

### Calculator

- Input validation with real-time feedback
- Compound interest calculation
- Accessible error handling
- Responsive result display

### Investment Table

- Detailed year-by-year breakdown
- Sortable columns
- Accessible table navigation
- Dynamic data updates

### Investment Summary

- Key metrics visualization
- Data persistence between views
- Accessible content structure

## Component Structure

### UI Components

- `main.component.ts`: Application shell with navigation
- `calculator.component.ts`: Main calculation form and results
- `compound-form.component.ts`: Form with validation
- `result-display.component.ts`: Calculation results with ARIA support
- `error-boundary.component.ts`: Error handling with retry
- `table-page.component.ts`: Investment breakdown table
- `summary-page.component.ts`: Investment summary view

### Business Logic

- `investment.function.ts`: Core calculation logic
- `navigation.function.ts`: Tab navigation handling
- `validation.function.ts`: Input validation rules

### Types and Models

- `investment.type.ts`: Core investment types and validation

## Accessibility Features

### ARIA Support

- Live regions for dynamic updates
- Alert roles for error messages
- Proper heading structure
- Form field descriptions

### Keyboard Navigation

- Tab order optimization
- Focus management
- Button interactions
- Table navigation

### Error Handling

- Clear error messages
- Retry functionality
- Validation feedback
- Screen reader support

## Validation Rules

### Initial Amount

- Minimum: $0
- Step: $100
- Required field

### Annual Interest Rate

- Range: 0% to 100%
- Step: 0.1%
- Required field

### Investment Period

- Minimum: 1 year
- Step: 1 year
- Required field

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design
- Progressive enhancement

## Project Information

- Created: 2024-03-20
- Author: [Alberto Basalo](https://github.com/albertobasalo)
- Organization: [AI code Academy](https://www.aicode.academy)
