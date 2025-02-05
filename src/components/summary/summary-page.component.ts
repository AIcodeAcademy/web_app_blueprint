const html = String.raw;

type CalculationData = {
  readonly amount: number;
  readonly rate: number;
  readonly years: number;
};

const calculateInvestmentMetrics = (data: CalculationData) => {
  const totalAmount = data.amount * Math.pow(1 + data.rate / 100, data.years);
  const totalInterest = totalAmount - data.amount;

  return {
    initialAmount: data.amount,
    totalAmount,
    totalInterest,
    years: data.years,
    rate: data.rate,
  };
};

export class SummaryPageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #handleCalculate = (event: CustomEvent<CalculationData>) => {
    const metrics = calculateInvestmentMetrics(event.detail);
    const display = this.shadowRoot?.querySelector('metrics-display');

    display?.dispatchEvent(
      new CustomEvent('update-metrics', {
        detail: metrics,
      }),
    );
  };

  connectedCallback() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = html`
      <main class="container">
        <header>
          <h1>Investment Summary</h1>
          <p>See a comprehensive overview of your investment growth</p>
        </header>

        <compound-form id="investment-form"></compound-form>
        <metrics-display id="metrics-overview"></metrics-display>
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

customElements.define('summary-page', SummaryPageComponent);
