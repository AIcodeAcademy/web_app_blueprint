import { Investment } from '../models/investment.type';
import { YearlyResult } from '../models/yearly-result.type';

export function calculateYearlyResults(investment: Investment): YearlyResult[] {
  const { amount, rate, years } = investment;
  const results: YearlyResult[] = [];
  let currentAmount = amount;
  let cumulativeInterest = 0;

  for (let year = 1; year <= years; year++) {
    const interest = currentAmount * (rate / 100);
    const endAmount = currentAmount + interest;
    cumulativeInterest += interest;

    results.push({
      year,
      startAmount: currentAmount,
      interest,
      endAmount,
      cumulativeInterest,
    });

    currentAmount = endAmount;
  }

  return results;
}

export function sortYearlyResults(
  results: YearlyResult[],
  field: keyof YearlyResult,
  ascending = true,
): YearlyResult[] {
  return [...results].sort((a, b) => {
    const multiplier = ascending ? 1 : -1;
    return (a[field] - b[field]) * multiplier;
  });
}
