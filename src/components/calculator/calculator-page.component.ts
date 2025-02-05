const html = String.raw;

type CalculationResult = {
  readonly totalAmount: number;
  readonly totalInterest: number;
  readonly years: number;
};

const calculateCompoundInterest = (
  amount: number,
  rate: number,
  years: number,
): CalculationResult => {
  const totalAmount = amount * Math.pow(1 + rate / 100, years);
  const totalInterest = totalAmount - amount;

  return {
    totalAmount,
    totalInterest,
    years,
  };
};

export class CalculatorPageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #handleCalculate = (event: CustomEvent) => {
    const { amount, rate, years } = event.detail;
    const result = calculateCompoundInterest(amount, rate, years);

    const resultDisplay = this.shadowRoot?.querySelector('result-display');
    resultDisplay?.dispatchEvent(
      new CustomEvent('update-result', {
        detail: result,
      }),
    );
  };

  connectedCallback() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = html`
      <main class="container">
        <h1>Investment Calculator</h1>
        <compound-form id="calculator-form"></compound-form>
        <result-display id="calculation-result"></result-display>
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

customElements.define('calculator-page', CalculatorPageComponent);
