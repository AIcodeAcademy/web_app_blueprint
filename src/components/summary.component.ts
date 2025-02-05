import { Summary } from '../models/summary.type';
import { formatCurrency } from '../utils/investment.function';
import { formatPercentage } from '../utils/summary.function';

const html = String.raw;

export function renderMetric(label: string, value: string): HTMLElement {
  const metric = document.createElement('article');
  metric.setAttribute('role', 'listitem');
  metric.innerHTML = html`
    <header>
      <h3>${label}</h3>
    </header>
    <p>${value}</p>
  `;
  return metric;
}

export function renderSummary(summary: Summary): HTMLElement {
  const section = document.createElement('section');
  section.setAttribute('aria-label', 'Investment Summary');

  const header = document.createElement('header');
  header.innerHTML = html`<h2>Investment Summary</h2>`;

  const metricsContainer = document.createElement('div');
  metricsContainer.setAttribute('role', 'list');
  metricsContainer.id = 'summary-metrics';

  const metrics = [
    { label: 'Final Amount', value: formatCurrency(summary.finalAmount) },
    { label: 'Total Interest Earned', value: formatCurrency(summary.totalInterest) },
    { label: 'Total Growth', value: formatPercentage(summary.growthPercentage) },
    { label: 'Annual Return', value: formatPercentage(summary.annualReturn) },
    { label: 'Return on Investment', value: formatPercentage(summary.totalReturn) },
  ];

  metrics.forEach(({ label, value }) => {
    metricsContainer.appendChild(renderMetric(label, value));
  });

  section.appendChild(header);
  section.appendChild(metricsContainer);

  return section;
}
