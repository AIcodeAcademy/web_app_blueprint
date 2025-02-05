import { YearlyResult } from '../../models/yearly-result.type';
import { formatCurrency } from '../../utils/investment.function';

const html = String.raw;

export function renderTable(results: YearlyResult[]): HTMLTableElement {
  const table = document.createElement('table');
  table.setAttribute('role', 'table');
  table.setAttribute('aria-label', 'Investment Breakdown by Year');

  const thead = document.createElement('thead');
  thead.innerHTML = html`
    <tr>
      <th scope="col" data-sort="year" role="columnheader" aria-sort="none">Year</th>
      <th scope="col" data-sort="startAmount" role="columnheader" aria-sort="none">
        Starting Amount
      </th>
      <th scope="col" data-sort="interest" role="columnheader" aria-sort="none">Interest</th>
      <th scope="col" data-sort="endAmount" role="columnheader" aria-sort="none">End Amount</th>
      <th scope="col" data-sort="cumulativeInterest" role="columnheader" aria-sort="none">
        Total Interest
      </th>
    </tr>
  `;

  const tbody = document.createElement('tbody');
  results.forEach((result) => {
    const row = document.createElement('tr');
    row.innerHTML = html`
      <td>${result.year}</td>
      <td>${formatCurrency(result.startAmount)}</td>
      <td>${formatCurrency(result.interest)}</td>
      <td>${formatCurrency(result.endAmount)}</td>
      <td>${formatCurrency(result.cumulativeInterest)}</td>
    `;
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}
