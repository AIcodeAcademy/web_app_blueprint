import { Investment } from '../models/investment.type';
import { YearlyResult } from '../models/yearly-result.type';
import { validateInvestment } from '../utils/investment.function';
import { calculateYearlyResults } from '../utils/table.function';

export function generateYearlyBreakdown(investment: Investment): YearlyResult[] {
  if (!validateInvestment(investment)) {
    throw new Error('Invalid investment parameters');
  }

  return calculateYearlyResults(investment);
}
