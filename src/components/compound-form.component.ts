const html = String.raw;

export function renderCompoundForm(): HTMLFormElement {
  const form = document.createElement('form');
  form.className = 'compound-form';

  const formContent = html`
    <div class="form-group">
      <label for="amount">Initial Amount ($)</label>
      <input type="number" id="amount" name="amount" required min="0" step="100" value="10000" />
      <div class="error-message" id="amount-error"></div>
    </div>
    <div class="form-group">
      <label for="rate">Annual Interest Rate (%)</label>
      <input
        type="number"
        id="rate"
        name="rate"
        required
        min="0"
        max="100"
        step="0.1"
        value="7.5"
      />
      <div class="error-message" id="rate-error"></div>
    </div>
    <div class="form-group">
      <label for="years">Investment Period (Years)</label>
      <input type="number" id="years" name="years" required min="1" step="1" value="10" />
      <div class="error-message" id="years-error"></div>
    </div>
    <button type="submit">Calculate</button>
  `;

  form.innerHTML = formContent;
  return form;
}
