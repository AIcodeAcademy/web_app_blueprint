export interface Investment {
  readonly amount: number;
  readonly rate: number;
  readonly years: number;
}

export interface YearlyResult {
  readonly year: number;
  readonly amount: number;
  readonly interest: number;
  readonly balance: number;
}
