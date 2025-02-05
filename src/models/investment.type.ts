export type Investment = {
  amount: number;
  rate: number;
  years: number;
};

export type InvestmentResult = {
  finalAmount: number;
  totalInterest: number;
};
