const html = String.raw;

type DisplayData = {
  readonly totalAmount: number;
  readonly totalInterest: number;
  readonly years: number;
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

export class ResultDisplayComponent extends HTMLElement {
  #data: DisplayData = {
    totalAmount: 0,
    totalInterest: 0,
    years: 0,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #renderContent = () => {
    if (!this.shadowRoot) return;

    const growthRate = (this.#data.totalInterest / this.#data.totalAmount) * 100;

    this.shadowRoot.innerHTML = html`
      <article class="container">
        <header>
          <h2>Investment Results</h2>
        </header>
        <section>
          <dl>
            <dt>Total Amount</dt>
            <dd data-testid="total-amount">${formatCurrency(this.#data.totalAmount)}</dd>

            <dt>Total Interest</dt>
            <dd data-testid="total-interest">${formatCurrency(this.#data.totalInterest)}</dd>

            <dt>Growth Rate</dt>
            <dd data-testid="growth-percentage">${formatPercentage(growthRate)}</dd>

            <dt>Investment Period</dt>
            <dd>${this.#data.years} years</dd>
          </dl>
        </section>
      </article>
    `;
  };

  #handleUpdateEvent = (event: CustomEvent<DisplayData>) => {
    this.#data = event.detail;
    this.#renderContent();
  };

  connectedCallback() {
    this.#renderContent();
    this.addEventListener('update-result', this.#handleUpdateEvent as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('update-result', this.#handleUpdateEvent as EventListener);
  }
}

customElements.define('result-display', ResultDisplayComponent);
