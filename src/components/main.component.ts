import { createNavigationState, setupTabHandlers, switchTab } from '../logic/navigation.function';
import { Investment } from '../models/investment.type';

const html = String.raw;

export function renderMain(): HTMLElement {
  const main = document.createElement('main');
  main.setAttribute('role', 'main');
  main.id = 'app-main';

  const header = document.createElement('header');
  header.innerHTML = html`
    <h1>Asset Growth Calculator</h1>
    <p>Calculate and visualize your investment growth over time</p>
  `;

  const nav = document.createElement('nav');
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');
  nav.innerHTML = html`
    <ul role="tablist">
      <li role="presentation">
        <button
          role="tab"
          aria-selected="true"
          id="tab-calculator"
          aria-controls="panel-calculator"
        >
          Calculator
        </button>
      </li>
      <li role="presentation">
        <button role="tab" aria-selected="false" id="tab-table" aria-controls="panel-table">
          Breakdown
        </button>
      </li>
      <li role="presentation">
        <button role="tab" aria-selected="false" id="tab-summary" aria-controls="panel-summary">
          Summary
        </button>
      </li>
    </ul>
  `;

  const content = document.createElement('section');
  content.id = 'content';

  let currentInvestment: Investment | undefined;

  const handleInvestmentUpdate = (investment: Investment) => {
    currentInvestment = investment;
    const tableTab = document.getElementById('tab-table');
    const summaryTab = document.getElementById('tab-summary');

    if (tableTab && summaryTab) {
      tableTab.removeAttribute('disabled');
      summaryTab.removeAttribute('disabled');
    }
  };

  const navigationState = createNavigationState(nav, content);

  main.appendChild(header);
  main.appendChild(nav);
  main.appendChild(content);

  setupTabHandlers(navigationState);
  switchTab(navigationState, 'calculator');

  return main;
}
