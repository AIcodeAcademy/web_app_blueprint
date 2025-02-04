import { renderFooter } from './components/footer.component';
import { createHeader } from './components/header.component';
import { createMain } from './components/main.component';
import './styles/theme.css';
import { createComponent } from './utils/components.function';

function main() {
  const slot = document.querySelector('body');
  if (!slot) throw new Error('Body slot not found');
  slot.appendChild(createHeader());
  slot.appendChild(createMain());
  slot.appendChild(createComponent('footer', renderFooter()));
}

main();
