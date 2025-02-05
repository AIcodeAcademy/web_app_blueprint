import { Investment } from '../models/investment.type';
import { renderCalculator } from './calculator.component';
import { renderSummaryPage } from './summary-page.component';
import { renderTablePage } from './table-page.component';

const html = String.raw;

type Tab = 'calculator' | 'table' | 'summary';

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

  const switchTab = (tab: Tab) => {
    // Update tab selection
    const tabs = nav.querySelectorAll('[role="tab"]');
    tabs.forEach((tabElement) => {
      const selected = tabElement.id === `tab-${tab}`;
      tabElement.setAttribute('aria-selected', selected.toString());
    });

    // Clear content
    content.innerHTML = '';

    // Render new content
    switch (tab) {
      case 'calculator': {
        const calculator = renderCalculator();
        calculator.addEventListener('investment-updated', ((event: CustomEvent<Investment>) => {
          handleInvestmentUpdate(event.detail);
        }) as EventListener);
        content.appendChild(calculator);
        break;
      }
      case 'table': {
        if (!currentInvestment) return;
        content.appendChild(renderTablePage(currentInvestment));
        break;
      }
      case 'summary': {
        if (!currentInvestment) return;
        content.appendChild(renderSummaryPage(currentInvestment));
        break;
      }
    }
  };

  // Setup tab handlers
  const setupTabHandlers = () => {
    const tabs = nav.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const tabId = tab.id.replace('tab-', '') as Tab;
        switchTab(tabId);
      });
    });

    // Initially disable table and summary tabs
    document.getElementById('tab-table')?.setAttribute('disabled', 'true');
    document.getElementById('tab-summary')?.setAttribute('disabled', 'true');
  };

  main.appendChild(header);
  main.appendChild(nav);
  main.appendChild(content);

  setupTabHandlers();
  switchTab('calculator');

  return main;
}
