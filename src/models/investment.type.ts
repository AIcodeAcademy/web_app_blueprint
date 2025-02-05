/**
 * Validation rules for investment inputs
 * @property {object} amount - Rules for initial investment amount
 * @property {object} rate - Rules for annual interest rate
 * @property {object} years - Rules for investment period
 */
export type InvestmentValidation = {
  amount: {
    min: number;
    step: number;
  };
  rate: {
    min: number;
    max: number;
    step: number;
  };
  years: {
    min: number;
    step: number;
  };
};

/**
 * Default validation rules for investment inputs
 */
export const investmentValidation: InvestmentValidation = {
  amount: {
    min: 0,
    step: 100,
  },
  rate: {
    min: 0,
    max: 100,
    step: 0.1,
  },
  years: {
    min: 1,
    step: 1,
  },
} as const;

/**
 * Investment parameters for calculation
 * @property {number} amount - Initial investment amount
 * @property {number} rate - Annual interest rate percentage
 * @property {number} years - Investment period in years
 */
export type Investment = {
  amount: number;
  rate: number;
  years: number;
};

/**
 * Result of investment calculation
 * @property {number} finalAmount - Total amount after interest
 * @property {number} totalInterest - Total interest earned
 */
export type InvestmentResult = {
  finalAmount: number;
  totalInterest: number;
};

/**
 * Form data structure for investment inputs
 * @property {string} amount - Initial investment amount as string
 * @property {string} rate - Annual interest rate as string
 * @property {string} years - Investment period as string
 */
export type InvestmentFormData = {
  amount: string;
  rate: string;
  years: string;
};
