import { computeInvestment } from '../logic/investment.function';
import { Investment } from '../models/investment.type';
import { renderCompoundForm } from './compound-form.component';
import { renderResultDisplay } from './result-display.component';

export function renderCalculator(): HTMLElement {
  const container = document.createElement('div');
  container.setAttribute('role', 'tabpanel');
  container.id = 'panel-calculator';
  container.setAttribute('aria-labelledby', 'tab-calculator');

  const form = renderCompoundForm();
  const resultContainer = document.createElement('div');
  resultContainer.id = 'result-container';

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

      // Emit event with investment data
      const updateEvent = new CustomEvent('investment-updated', {
        detail: investment,
        bubbles: true,
      });
      container.dispatchEvent(updateEvent);
    } catch (error: unknown) {
      if (error instanceof Error) {
        resultContainer.innerHTML = html`<p role="alert">${error.message}</p>`;
      }
    }
  };

  form.addEventListener('submit', handleSubmit);

  container.appendChild(form);
  container.appendChild(resultContainer);

  return container;
}
