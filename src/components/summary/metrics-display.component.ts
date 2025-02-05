const html = String.raw;

type MetricsData = {
  readonly initialAmount: number;
  readonly totalAmount: number;
  readonly totalInterest: number;
  readonly years: number;
  readonly rate: number;
};

const formatCurrency = (amount: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

const formatPercentage = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
  }).format(value / 100);

export class MetricsDisplayComponent extends HTMLElement {
  #metrics: MetricsData = {
    initialAmount: 0,
    totalAmount: 0,
    totalInterest: 0,
    years: 0,
    rate: 0,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #calculateMetrics = () => {
    const growthRate =
      ((this.#metrics.totalAmount - this.#metrics.initialAmount) / this.#metrics.initialAmount) *
      100;
    const annualReturn =
      (Math.pow(this.#metrics.totalAmount / this.#metrics.initialAmount, 1 / this.#metrics.years) -
        1) *
      100;

    return {
      growthRate,
      annualReturn,
    };
  };

  #renderContent = () => {
    if (!this.shadowRoot) return;

    const { growthRate, annualReturn } = this.#calculateMetrics();

    this.shadowRoot.innerHTML = html`
      <article class="container">
        <header>
          <h2>Investment Summary</h2>
        </header>
        <section>
          <div class="grid">
            <div>
              <h3>Initial Investment</h3>
              <p data-testid="initial-amount">${formatCurrency(this.#metrics.initialAmount)}</p>
            </div>
            <div>
              <h3>Total Return</h3>
              <p data-testid="total-amount">${formatCurrency(this.#metrics.totalAmount)}</p>
            </div>
            <div>
              <h3>Total Interest</h3>
              <p data-testid="total-interest">${formatCurrency(this.#metrics.totalInterest)}</p>
            </div>
            <div>
              <h3>Growth Rate</h3>
              <p data-testid="growth-rate">${formatPercentage(growthRate)}</p>
            </div>
            <div>
              <h3>Annual Return</h3>
              <p data-testid="annual-return">${formatPercentage(annualReturn)}</p>
            </div>
            <div>
              <h3>Investment Period</h3>
              <p data-testid="investment-period">
                ${this.#metrics.years} years at ${formatPercentage(this.#metrics.rate)}
              </p>
            </div>
          </div>
        </section>
      </article>
    `;
  };

  #handleUpdateEvent = (event: CustomEvent<MetricsData>) => {
    this.#metrics = event.detail;
    this.#renderContent();
  };

  connectedCallback() {
    this.#renderContent();
    this.addEventListener('update-metrics', this.#handleUpdateEvent as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('update-metrics', this.#handleUpdateEvent as EventListener);
  }
}

customElements.define('metrics-display', MetricsDisplayComponent);
