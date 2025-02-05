import { InvestmentResult } from '../models/investment.type';
import { formatCurrency } from '../utils/investment.function';

const html = String.raw;

/**
 * Renders the investment calculation results
 * @param {InvestmentResult} result - The calculation results to display
 * @returns {HTMLElement} The result display container with ARIA support
 */
export function renderResultDisplay(result: InvestmentResult): HTMLElement {
  const container = document.createElement('div');
  container.className = 'result-display';
  container.setAttribute('role', 'region');
  container.setAttribute('aria-label', 'Investment calculation results');
  container.setAttribute('aria-live', 'polite');

  const content = html`
    <h2 id="results-heading">Investment Results</h2>
    <dl role="list" aria-labelledby="results-heading">
      <div class="result-item" role="listitem">
        <dt class="label">Final Amount:</dt>
        <dd class="value" aria-label="Final investment amount">
          ${formatCurrency(result.finalAmount)}
        </dd>
      </div>
      <div class="result-item" role="listitem">
        <dt class="label">Total Interest Earned:</dt>
        <dd class="value" aria-label="Total interest earned">
          ${formatCurrency(result.totalInterest)}
        </dd>
      </div>
    </dl>
  `;

  container.innerHTML = content;
  return container;
}
