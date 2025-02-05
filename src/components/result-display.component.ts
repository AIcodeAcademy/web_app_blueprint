import { InvestmentResult } from '../models/investment.type';
import { formatCurrency } from '../utils/investment.function';

const html = String.raw;

export function renderResultDisplay(result: InvestmentResult): HTMLElement {
  const container = document.createElement('div');
  container.className = 'result-display';

  const content = html`
    <h2>Investment Results</h2>
    <div class="result-item">
      <span class="label">Final Amount:</span>
      <span class="value">${formatCurrency(result.finalAmount)}</span>
    </div>
    <div class="result-item">
      <span class="label">Total Interest Earned:</span>
      <span class="value">${formatCurrency(result.totalInterest)}</span>
    </div>
  `;

  container.innerHTML = content;
  return container;
}
