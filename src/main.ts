// CSS
import './styles.css';

// Components
import { renderFooter } from './components/footer.component';
import { createHeader } from './components/header.component';
import { renderMain } from './components/main.component';
import { createComponent } from './utils/components.function';

// Import components
import './components/calculator/calculator-page.component';
import './components/calculator/compound-form.component';
import './components/calculator/result-display.component';
import './components/layout/footer.component';
import './components/layout/header.component';
import './components/summary/metrics-display.component';
import './components/summary/summary-page.component';
import './components/table/investment-table.component';
import './components/table/table-page.component';

const html = String.raw;

export class AppComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = html`
      <app-header></app-header>
      <calculator-page></calculator-page>
      <app-footer></app-footer>
    `;
  }
}

customElements.define('app-root', AppComponent);

/**
 * Asset Grow - Investment Calculator
 * @author Alberto Basalo
 * @description Calculate compound interest and visualize investment growth over time
 */
function main() {
  const slot = document.querySelector('body');
  if (!slot) throw new Error('Body slot not found');
  slot.appendChild(createHeader());
  slot.appendChild(renderMain());
  slot.appendChild(createComponent('footer', renderFooter()));
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  if (root) {
    root.appendChild(renderMain());
  }
});

main();
