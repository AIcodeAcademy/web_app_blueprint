import { computeInvestment } from '../logic/investment.function';
import { Investment } from '../models/investment.type';
import { renderCompoundForm } from './compound-form.component';
import { renderResultDisplay } from './result-display.component';

export function renderCalculator(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'calculator-container';

  const form = renderCompoundForm();
  const resultContainer = document.createElement('div');
  resultContainer.id = 'result-container';

  const handleError = (message: string) => {
    resultContainer.innerHTML = `<div class="error">${message}</div>`;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const investment: Investment = {
      amount: Number(formData.get('amount')),
      rate: Number(formData.get('rate')),
      years: Number(formData.get('years')),
    };

    try {
      const result = computeInvestment(investment);
      resultContainer.innerHTML = '';
      resultContainer.appendChild(renderResultDisplay(result));
    } catch (error: unknown) {
      if (error instanceof Error) {
        handleError(error.message);
      } else {
        handleError('An unexpected error occurred');
      }
    }
  };

  form.addEventListener('submit', handleSubmit);

  container.appendChild(form);
  container.appendChild(resultContainer);

  return container;
}
