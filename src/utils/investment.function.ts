import { Investment } from '../models/investment.type';

export function validateInvestment(input: Investment): boolean {
  return (
    input.amount > 0 &&
    input.rate >= 0 &&
    input.rate <= 100 &&
    input.years > 0 &&
    Number.isInteger(input.years)
  );
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
