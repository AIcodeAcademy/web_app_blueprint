// CSS
import './styles.css';

// Components
import { renderFooter } from './components/footer.component';
import { createHeader } from './components/header.component';
import { createMain } from './components/main.component';
import { createComponent } from './utils/components.function';

/**
 * Asset Grow - Investment Calculator
 * @author Alberto Basalo
 * @description Calculate compound interest and visualize investment growth over time
 */
function main() {
  const slot = document.querySelector('body');
  if (!slot) throw new Error('Body slot not found');
  slot.appendChild(createHeader());
  slot.appendChild(createMain());
  slot.appendChild(createComponent('footer', renderFooter()));
}

main();
