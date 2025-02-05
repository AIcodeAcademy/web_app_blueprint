import { computeInvestment } from '../logic/investment.function';
import { Investment, InvestmentFormData, investmentValidation } from '../models/investment.type';
import { renderCompoundForm } from './compound-form.component';
import { renderErrorBoundary } from './error-boundary.component';
import { renderResultDisplay } from './result-display.component';

const html = String.raw;

/**
 * Extended HTMLElement type with custom event dispatch
 */
type CalculatorElement = HTMLElement & {
  dispatchEvent(event: CustomEvent<Investment>): boolean;
};

/**
 * Renders the main calculator component with form and result display
 * @returns {CalculatorElement} The calculator container element with custom event dispatch
 * @fires investment-updated - When a calculation is successful
 */
export function renderCalculator(): CalculatorElement {
  const container = document.createElement('div') as CalculatorElement;
  container.setAttribute('role', 'tabpanel');
  container.id = 'panel-calculator';
  container.setAttribute('aria-labelledby', 'tab-calculator');

  const form = renderCompoundForm(investmentValidation);
  const resultContainer = document.createElement('div');
  resultContainer.id = 'result-container';
  resultContainer.setAttribute('aria-live', 'polite');

  const validateFormData = (formData: FormData): InvestmentFormData => {
    const data = {
      amount: formData.get('amount'),
      rate: formData.get('rate'),
      years: formData.get('years'),
    } as InvestmentFormData;

    if (!data.amount || !data.rate || !data.years) {
      throw new Error('All fields are required');
    }

    return data;
  };

  const parseInvestment = (data: InvestmentFormData): Investment => {
    const amount = Number(data.amount);
    const rate = Number(data.rate);
    const years = Number(data.years);

    if (isNaN(amount) || amount < investmentValidation.amount.min) {
      throw new Error('Invalid amount');
    }
    if (
      isNaN(rate) ||
      rate < investmentValidation.rate.min ||
      rate > investmentValidation.rate.max
    ) {
      throw new Error('Invalid rate');
    }
    if (isNaN(years) || years < investmentValidation.years.min) {
      throw new Error('Invalid years');
    }

    return { amount, rate, years };
  };

  const calculateInvestment = (formData: FormData): void => {
    try {
      const data = validateFormData(formData);
      const investment = parseInvestment(data);
      const result = computeInvestment(investment);

      resultContainer.innerHTML = '';
      resultContainer.appendChild(renderResultDisplay(result));

      const updateEvent = new CustomEvent('investment-updated', {
        detail: investment,
        bubbles: true,
      });
      container.dispatchEvent(updateEvent);
    } catch (error: unknown) {
      resultContainer.innerHTML = '';
      resultContainer.appendChild(
        renderErrorBoundary(error, {
          retry: () => form.dispatchEvent(new Event('submit')),
        }),
      );
    }
  };

  const handleSubmit = (event: Event): void => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    calculateInvestment(formData);
  };

  form.addEventListener('submit', handleSubmit);

  container.appendChild(form);
  container.appendChild(resultContainer);

  return container;
}
