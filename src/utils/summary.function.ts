export function calculateGrowthPercentage(initial: number, final: number): number {
  return ((final - initial) / initial) * 100;
}

export function calculateAnnualReturn(initial: number, final: number, years: number): number {
  return (Math.pow(final / initial, 1 / years) - 1) * 100;
}

export function formatPercentage(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100);
}
