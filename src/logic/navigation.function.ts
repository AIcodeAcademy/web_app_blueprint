import { renderCalculator } from '../components/calculator.component';
import { renderSummaryPage } from '../components/summary-page.component';
import { renderTablePage } from '../components/table-page.component';
import { Investment } from '../models/investment.type';

/** Available navigation tabs */
export type Tab = 'calculator' | 'table' | 'summary';

/** Navigation state for managing tab switching */
type NavigationState = {
  currentInvestment?: Investment;
  nav: HTMLElement;
  content: HTMLElement;
};

/**
 * Creates initial navigation state
 * @param {HTMLElement} nav - Navigation container element
 * @param {HTMLElement} content - Content container element
 * @returns {NavigationState} Initial navigation state
 */
export function createNavigationState(nav: HTMLElement, content: HTMLElement): NavigationState {
  return {
    nav,
    content,
    currentInvestment: undefined,
  };
}

/**
 * Handles investment update events
 * @param {NavigationState} state - Current navigation state
 * @param {Investment} investment - New investment data
 */
export function handleInvestmentUpdate(state: NavigationState, investment: Investment): void {
  state.currentInvestment = investment;
  const tableTab = document.getElementById('tab-table');
  const summaryTab = document.getElementById('tab-summary');

  if (tableTab && summaryTab) {
    tableTab.removeAttribute('disabled');
    summaryTab.removeAttribute('disabled');
  }
}

/**
 * Switches active tab and updates content
 * @param {NavigationState} state - Current navigation state
 * @param {Tab} tab - Target tab to switch to
 */
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

/**
 * Sets up tab click handlers and initial state
 * @param {NavigationState} state - Current navigation state
 */
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
