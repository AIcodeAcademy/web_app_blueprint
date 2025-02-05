import { computeInvestment } from '../logic/investment.function';
import { computeSummary } from '../logic/summary.function';
import { Investment } from '../models/investment.type';
import { renderSummary } from './summary.component';

const html = String.raw;

export function renderSummaryPage(investment: Investment): HTMLElement {
  const section = document.createElement('section');
  section.setAttribute('aria-label', 'Investment Analysis');

  try {
    const result = computeInvestment(investment);
    const summary = computeSummary(investment, result);
    section.appendChild(renderSummary(summary));
  } catch (error: unknown) {
    const errorElement = document.createElement('article');
    errorElement.setAttribute('aria-label', 'Error Message');
    errorElement.innerHTML =
      error instanceof Error
        ? html`<p role="alert">${error.message}</p>`
        : html`<p role="alert">An unexpected error occurred</p>`;
    section.appendChild(errorElement);
  }

  return section;
}
