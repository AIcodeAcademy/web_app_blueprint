import { Investment, InvestmentResult } from '../models/investment.type';

export function calculateCompoundInterest(investment: Investment): InvestmentResult {
  const { amount, rate, years } = investment;
  const finalAmount = amount * Math.pow(1 + rate / 100, years);
  const totalInterest = finalAmount - amount;

  return {
    finalAmount,
    totalInterest,
  };
}
