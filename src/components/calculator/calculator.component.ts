import { Investment, InvestmentResult } from '../../models/investment.type';
import { renderCompoundForm } from './compound-form.component';
import { renderResultDisplay } from './result-display.component';

const html = String.raw;

export function renderCalculator(): HTMLElement {
  const calculator = document.createElement('article');
  calculator.setAttribute('role', 'tabpanel');
  calculator.id = 'panel-calculator';
  calculator.setAttribute('aria-labelledby', 'tab-calculator');

  const form = renderCompoundForm();
  const initialResult: InvestmentResult = { finalAmount: 0, totalInterest: 0 };
  const resultDisplay = renderResultDisplay(initialResult);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const amount = Number(formData.get('amount'));
    const rate = Number(formData.get('rate'));
    const years = Number(formData.get('years'));

    if (amount <= 0 || rate < 0 || rate > 100 || years < 1) {
      return;
    }

    const investment: Investment = {
      amount,
      rate,
      years,
    };

    const result: InvestmentResult = {
      finalAmount: amount * Math.pow(1 + rate / 100, years),
      totalInterest: amount * Math.pow(1 + rate / 100, years) - amount,
    };

    calculator.dispatchEvent(
      new CustomEvent('investment-updated', {
        detail: { ...investment, ...result },
        bubbles: true,
      }),
    );

    calculator.replaceChild(renderResultDisplay(result), resultDisplay);
  });

  calculator.appendChild(form);
  calculator.appendChild(resultDisplay);

  return calculator;
}
