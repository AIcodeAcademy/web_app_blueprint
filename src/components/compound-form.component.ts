import { InvestmentValidation } from '../models/investment.type';

const html = String.raw;

export function renderCompoundForm(validation: InvestmentValidation): HTMLFormElement {
  const form = document.createElement('form');
  form.className = 'compound-form';

  const formContent = html`
    <div class="form-group">
      <label for="amount">Initial Amount ($)</label>
      <input
        type="number"
        id="amount"
        name="amount"
        required
        min="${validation.amount.min}"
        step="${validation.amount.step}"
        value="10000"
      />
      <div class="error-message" id="amount-error"></div>
    </div>
    <div class="form-group">
      <label for="rate">Annual Interest Rate (%)</label>
      <input
        type="number"
        id="rate"
        name="rate"
        required
        min="${validation.rate.min}"
        max="${validation.rate.max}"
        step="${validation.rate.step}"
        value="7.5"
      />
      <div class="error-message" id="rate-error"></div>
    </div>
    <div class="form-group">
      <label for="years">Investment Period (Years)</label>
      <input
        type="number"
        id="years"
        name="years"
        required
        min="${validation.years.min}"
        step="${validation.years.step}"
        value="10"
      />
      <div class="error-message" id="years-error"></div>
    </div>
    <button type="submit">Calculate</button>
  `;

  form.innerHTML = formContent;
  return form;
}
