import { YearlyResult } from '../models/yearly-result.type';
import { formatCurrency } from '../utils/investment.function';

const html = String.raw;

export function renderTableRow(result: YearlyResult): HTMLTableRowElement {
  const row = document.createElement('tr');
  row.setAttribute('role', 'row');
  row.innerHTML = html`
    <td role="cell">${result.year}</td>
    <td role="cell">${formatCurrency(result.startAmount)}</td>
    <td role="cell">${formatCurrency(result.interest)}</td>
    <td role="cell">${formatCurrency(result.endAmount)}</td>
    <td role="cell">${formatCurrency(result.cumulativeInterest)}</td>
  `;
  return row;
}

export function renderTable(results: YearlyResult[]): HTMLTableElement {
  const table = document.createElement('table');
  table.setAttribute('role', 'table');
  table.id = 'investment-table';

  const header = html`
    <thead role="rowgroup">
      <tr role="row">
        <th role="columnheader" aria-sort="none" data-sort="year">Year</th>
        <th role="columnheader" aria-sort="none" data-sort="startAmount">Starting Amount</th>
        <th role="columnheader" aria-sort="none" data-sort="interest">Interest</th>
        <th role="columnheader" aria-sort="none" data-sort="endAmount">Ending Amount</th>
        <th role="columnheader" aria-sort="none" data-sort="cumulativeInterest">Total Interest</th>
      </tr>
    </thead>
    <tbody role="rowgroup"></tbody>
  `;

  table.innerHTML = header;
  const tbody = table.querySelector('tbody')!;

  results.forEach((result) => {
    tbody.appendChild(renderTableRow(result));
  });

  return table;
}
