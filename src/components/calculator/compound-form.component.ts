const html = String.raw;

type FormValues = {
  amount: number;
  rate: number;
  years: number;
};

export class CompoundFormComponent extends HTMLElement {
  #amount = 1000;
  #rate = 5;
  #years = 10;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    switch (input.name) {
      case 'amount':
        this.#amount = value;
        break;
      case 'rate':
        this.#rate = value;
        break;
      case 'years':
        this.#years = value;
        break;
    }
  };

  #handleSubmit = (event: Event) => {
    event.preventDefault();

    const detail: FormValues = {
      amount: this.#amount,
      rate: this.#rate,
      years: this.#years,
    };

    this.dispatchEvent(
      new CustomEvent('calculate', {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  };

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = html`
        <article class="container">
          <form id="compound-form">
            <label for="amount">
              Initial Investment ($)
              <input
                type="number"
                id="amount"
                name="amount"
                data-testid="amount-input"
                value="${this.#amount}"
                min="100"
                required
                aria-required="true"
              />
            </label>

            <label for="rate">
              Annual Interest Rate (%)
              <input
                type="number"
                id="rate"
                name="rate"
                data-testid="rate-input"
                value="${this.#rate}"
                min="0"
                max="100"
                step="0.1"
                required
                aria-required="true"
              />
            </label>

            <label for="years">
              Investment Period (Years)
              <input
                type="number"
                id="years"
                name="years"
                data-testid="years-input"
                value="${this.#years}"
                min="1"
                max="50"
                required
                aria-required="true"
              />
            </label>

            <button type="submit" data-testid="calculate-button">Calculate 📊</button>
          </form>
        </article>
      `;

      const form = this.shadowRoot.getElementById('compound-form');
      form?.addEventListener('submit', this.#handleSubmit);

      const inputs = this.shadowRoot.querySelectorAll('input');
      inputs.forEach((input) => {
        input.addEventListener('input', this.#handleInput);
      });
    }
  }

  disconnectedCallback() {
    if (this.shadowRoot) {
      const form = this.shadowRoot.getElementById('compound-form');
      form?.removeEventListener('submit', this.#handleSubmit);

      const inputs = this.shadowRoot.querySelectorAll('input');
      inputs.forEach((input) => {
        input.removeEventListener('input', this.#handleInput);
      });
    }
  }
}

customElements.define('compound-form', CompoundFormComponent);
