import { InvestmentValidation } from '../models/investment.type';

const html = String.raw;

/**
 * Result of validating a form field
 * @property {boolean} isValid - Whether the field value is valid
 * @property {string} message - Validation message (empty if valid)
 */
type ValidationResult = {
  isValid: boolean;
  message: string;
};

/**
 * Validates a single form field value
 * @param {string} value - The field value to validate
 * @param {string} fieldName - The name of the field for error messages
 * @param {InvestmentValidation} validation - Validation rules to apply
 * @returns {ValidationResult} The validation result
 */
function validateField(
  value: string,
  fieldName: string,
  validation: InvestmentValidation,
): ValidationResult {
  const numValue = Number(value);

  if (!value) {
    return {
      isValid: false,
      message: `${fieldName} is required`,
    };
  }

  if (isNaN(numValue)) {
    return {
      isValid: false,
      message: `${fieldName} must be a valid number`,
    };
  }

  switch (fieldName) {
    case 'Initial Amount': {
      if (numValue < validation.amount.min) {
        return {
          isValid: false,
          message: `${fieldName} must be at least ${validation.amount.min}`,
        };
      }
      break;
    }
    case 'Annual Interest Rate': {
      if (numValue < validation.rate.min || numValue > validation.rate.max) {
        return {
          isValid: false,
          message: `${fieldName} must be between ${validation.rate.min}% and ${validation.rate.max}%`,
        };
      }
      break;
    }
    case 'Investment Period': {
      if (numValue < validation.years.min) {
        return {
          isValid: false,
          message: `${fieldName} must be at least ${validation.years.min} year`,
        };
      }
      break;
    }
  }

  return { isValid: true, message: '' };
}

/**
 * Renders the compound interest calculator form
 * @param {InvestmentValidation} validation - Validation rules for form fields
 * @returns {HTMLFormElement} The form element with validation
 */
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
        aria-describedby="amount-error"
      />
      <div class="error-message" id="amount-error" role="alert" aria-live="polite"></div>
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
        aria-describedby="rate-error"
      />
      <div class="error-message" id="rate-error" role="alert" aria-live="polite"></div>
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
        aria-describedby="years-error"
      />
      <div class="error-message" id="years-error" role="alert" aria-live="polite"></div>
    </div>
    <button type="submit">Calculate</button>
  `;

  form.innerHTML = formContent;

  const setupValidation = (inputId: string, errorId: string, fieldName: string): void => {
    const input = form.querySelector(`#${inputId}`) as HTMLInputElement;
    const errorElement = form.querySelector(`#${errorId}`) as HTMLElement;

    const validateInput = (): void => {
      const result = validateField(input.value, fieldName, validation);
      input.setAttribute('aria-invalid', (!result.isValid).toString());
      errorElement.textContent = result.message;
      input.setCustomValidity(result.message);
    };

    input.addEventListener('input', validateInput);
    input.addEventListener('blur', validateInput);
  };

  setupValidation('amount', 'amount-error', 'Initial Amount');
  setupValidation('rate', 'rate-error', 'Annual Interest Rate');
  setupValidation('years', 'years-error', 'Investment Period');

  return form;
}
