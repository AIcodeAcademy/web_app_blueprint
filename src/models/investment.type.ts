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

export type Investment = {
  amount: number;
  rate: number;
  years: number;
};

export type InvestmentResult = {
  finalAmount: number;
  totalInterest: number;
};

export type InvestmentFormData = {
  amount: string;
  rate: string;
  years: string;
};
