import { generateYearlyBreakdown } from '../logic/table.function';
import { Investment } from '../models/investment.type';
import { YearlyResult } from '../models/yearly-result.type';
import { sortYearlyResults } from '../utils/table.function';
import { renderTable } from './table.component';

const html = String.raw;

export function renderTablePage(investment: Investment): HTMLElement {
  const section = document.createElement('section');
  section.setAttribute('aria-label', 'Investment Breakdown');

  const header = document.createElement('header');
  header.innerHTML = html`
    <h2>Year-by-Year Breakdown</h2>
    <p>Click column headers to sort</p>
  `;

  const article = document.createElement('article');

  const handleSort = (field: keyof YearlyResult, ascending: boolean) => {
    const results = generateYearlyBreakdown(investment);
    const sortedResults = sortYearlyResults(results, field, ascending);
    article.innerHTML = '';
    article.appendChild(renderTable(sortedResults));
  };

  const setupSortHandlers = (table: HTMLTableElement) => {
    const headers = table.querySelectorAll<HTMLElement>('th[data-sort]');
    headers.forEach((header) => {
      const field = header.dataset.sort as keyof YearlyResult;
      let ascending = true;

      header.addEventListener('click', () => {
        ascending = !ascending;
        headers.forEach((h) => {
          h.setAttribute('aria-sort', 'none');
        });
        header.setAttribute('aria-sort', ascending ? 'ascending' : 'descending');
        handleSort(field, ascending);
      });
    });
  };

  try {
    const results = generateYearlyBreakdown(investment);
    const table = renderTable(results);
    setupSortHandlers(table);
    article.appendChild(table);
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorElement = document.createElement('article');
      errorElement.setAttribute('aria-label', 'Error Message');
      errorElement.innerHTML = html`<p role="alert">${error.message}</p>`;
      article.appendChild(errorElement);
    }
  }

  section.appendChild(header);
  section.appendChild(article);

  return section;
}
