import { Investment, InvestmentResult } from '../models/investment.type';
import { calculateCompoundInterest } from '../utils/calculator.function';
import { validateInvestment } from '../utils/investment.function';

export function computeInvestment(input: Investment): InvestmentResult {
  if (!validateInvestment(input)) {
    throw new Error('Invalid investment parameters');
  }

  return calculateCompoundInterest(input);
}
