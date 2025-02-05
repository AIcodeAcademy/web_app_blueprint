const html = String.raw;

type CalculationData = {
  readonly amount: number;
  readonly rate: number;
  readonly years: number;
};

export class TablePageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #handleCalculate = (event: CustomEvent<CalculationData>) => {
    const table = this.shadowRoot?.querySelector('investment-table');
    table?.dispatchEvent(
      new CustomEvent('update-table', {
        detail: {
          initialAmount: event.detail.amount,
          rate: event.detail.rate,
          years: event.detail.years,
        },
      }),
    );
  };

  connectedCallback() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = html`
      <main class="container">
        <header>
          <h1>Investment Breakdown</h1>
          <p>See your investment growth year by year</p>
        </header>

        <compound-form id="investment-form"></compound-form>
        <investment-table id="yearly-breakdown"></investment-table>
      </main>
    `;

    const form = this.shadowRoot.querySelector('compound-form');
    form?.addEventListener('calculate', this.#handleCalculate as EventListener);
  }

  disconnectedCallback() {
    const form = this.shadowRoot?.querySelector('compound-form');
    form?.removeEventListener('calculate', this.#handleCalculate as EventListener);
  }
}

customElements.define('table-page', TablePageComponent);
