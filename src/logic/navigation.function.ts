import { renderCalculator } from '../components/calculator.component';
import { renderSummaryPage } from '../components/summary-page.component';
import { renderTablePage } from '../components/table-page.component';
import { Investment } from '../models/investment.type';

export type Tab = 'calculator' | 'table' | 'summary';

type NavigationState = {
  currentInvestment?: Investment;
  nav: HTMLElement;
  content: HTMLElement;
};

export function createNavigationState(nav: HTMLElement, content: HTMLElement): NavigationState {
  return {
    nav,
    content,
    currentInvestment: undefined,
  };
}

export function handleInvestmentUpdate(state: NavigationState, investment: Investment): void {
  state.currentInvestment = investment;
  const tableTab = document.getElementById('tab-table');
  const summaryTab = document.getElementById('tab-summary');

  if (tableTab && summaryTab) {
    tableTab.removeAttribute('disabled');
    summaryTab.removeAttribute('disabled');
  }
}

export function switchTab(state: NavigationState, tab: Tab): void {
  const tabs = state.nav.querySelectorAll('[role="tab"]');
  tabs.forEach((tabElement) => {
    const selected = tabElement.id === `tab-${tab}`;
    tabElement.setAttribute('aria-selected', selected.toString());
  });

  state.content.innerHTML = '';

  switch (tab) {
    case 'calculator': {
      const calculator = renderCalculator();
      calculator.addEventListener('investment-updated', ((event: CustomEvent<Investment>) => {
        handleInvestmentUpdate(state, event.detail);
      }) as EventListener);
      state.content.appendChild(calculator);
      break;
    }
    case 'table': {
      if (!state.currentInvestment) return;
      state.content.appendChild(renderTablePage(state.currentInvestment));
      break;
    }
    case 'summary': {
      if (!state.currentInvestment) return;
      state.content.appendChild(renderSummaryPage(state.currentInvestment));
      break;
    }
  }
}

export function setupTabHandlers(state: NavigationState): void {
  const tabs = state.nav.querySelectorAll('[role="tab"]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabId = tab.id.replace('tab-', '') as Tab;
      switchTab(state, tabId);
    });
  });

  document.getElementById('tab-table')?.setAttribute('disabled', 'true');
  document.getElementById('tab-summary')?.setAttribute('disabled', 'true');
}
