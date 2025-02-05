import { Investment, InvestmentResult } from '../models/investment.type';
import { Summary } from '../models/summary.type';
import { validateInvestment } from '../utils/investment.function';
import { calculateAnnualReturn, calculateGrowthPercentage } from '../utils/summary.function';

export function computeSummary(investment: Investment, result: InvestmentResult): Summary {
  if (!validateInvestment(investment)) {
    throw new Error('Invalid investment parameters');
  }

  const growthPercentage = calculateGrowthPercentage(investment.amount, result.finalAmount);
  const annualReturn = calculateAnnualReturn(
    investment.amount,
    result.finalAmount,
    investment.years,
  );
  const totalReturn = (result.totalInterest / investment.amount) * 100;

  return {
    finalAmount: result.finalAmount,
    totalInterest: result.totalInterest,
    growthPercentage,
    annualReturn,
    totalReturn,
  };
}
