const html = String.raw;

type YearlyData = {
  readonly year: number;
  readonly startBalance: number;
  readonly interest: number;
  readonly endBalance: number;
};

type TableData = {
  readonly initialAmount: number;
  readonly rate: number;
  readonly years: number;
};

const calculateYearlyData = (data: TableData): YearlyData[] => {
  const yearlyResults: YearlyData[] = [];
  let currentBalance = data.initialAmount;

  for (let year = 1; year <= data.years; year++) {
    const interest = currentBalance * (data.rate / 100);
    const endBalance = currentBalance + interest;

    yearlyResults.push({
      year,
      startBalance: currentBalance,
      interest,
      endBalance,
    });

    currentBalance = endBalance;
  }

  return yearlyResults;
};

const formatCurrency = (amount: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

export class InvestmentTableComponent extends HTMLElement {
  #yearlyData: YearlyData[] = [];
  #sortDirection: 'asc' | 'desc' = 'asc';
  #sortColumn = 'year';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #handleSort = (column: string) => {
    this.#sortDirection =
      this.#sortColumn === column && this.#sortDirection === 'asc' ? 'desc' : 'asc';
    this.#sortColumn = column;
    this.#renderContent();
  };

  #getSortedData = (): YearlyData[] => {
    return [...this.#yearlyData].sort((a, b) => {
      const multiplier = this.#sortDirection === 'asc' ? 1 : -1;
      return (
        (a[this.#sortColumn as keyof YearlyData] as number) * multiplier -
        (b[this.#sortColumn as keyof YearlyData] as number) * multiplier
      );
    });
  };

  #renderContent = () => {
    if (!this.shadowRoot) return;

    const sortedData = this.#getSortedData();
    const sortIcon = this.#sortDirection === 'asc' ? '↑' : '↓';

    this.shadowRoot.innerHTML = html`
      <article class="container">
        <table role="grid">
          <thead>
            <tr>
              <th>
                <button
                  type="button"
                  data-testid="year-header"
                  @click="${() => this.#handleSort('year')}"
                >
                  Year ${this.#sortColumn === 'year' ? sortIcon : ''}
                </button>
              </th>
              <th>
                <button
                  type="button"
                  data-testid="start-balance-header"
                  @click="${() => this.#handleSort('startBalance')}"
                >
                  Starting Balance ${this.#sortColumn === 'startBalance' ? sortIcon : ''}
                </button>
              </th>
              <th>
                <button
                  type="button"
                  data-testid="interest-header"
                  @click="${() => this.#handleSort('interest')}"
                >
                  Interest ${this.#sortColumn === 'interest' ? sortIcon : ''}
                </button>
              </th>
              <th>
                <button
                  type="button"
                  data-testid="end-balance-header"
                  @click="${() => this.#handleSort('endBalance')}"
                >
                  Ending Balance ${this.#sortColumn === 'endBalance' ? sortIcon : ''}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            ${sortedData
              .map(
                (row) => html`
                  <tr>
                    <td>${row.year}</td>
                    <td>${formatCurrency(row.startBalance)}</td>
                    <td>${formatCurrency(row.interest)}</td>
                    <td>${formatCurrency(row.endBalance)}</td>
                  </tr>
                `,
              )
              .join('')}
          </tbody>
        </table>
      </article>
    `;

    const headers = this.shadowRoot.querySelectorAll('button');
    headers.forEach((header) => {
      header.addEventListener('click', () =>
        this.#handleSort(header.getAttribute('data-sort-column') || 'year'),
      );
    });
  };

  #handleUpdateEvent = (event: CustomEvent<TableData>) => {
    this.#yearlyData = calculateYearlyData(event.detail);
    this.#renderContent();
  };

  connectedCallback() {
    this.#renderContent();
    this.addEventListener('update-table', this.#handleUpdateEvent as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('update-table', this.#handleUpdateEvent as EventListener);
  }
}

customElements.define('investment-table', InvestmentTableComponent);
