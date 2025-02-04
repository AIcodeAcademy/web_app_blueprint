import { renderFooter } from './components/footer.component';
import { renderHeader } from './components/header.component';
import { renderMain } from './components/main.component';
import './styles/theme.css';
import { createComponent } from './utils/components.function';

function main() {
  const slot = document.querySelector('body');
  if (!slot) throw new Error('Body slot not found');
  slot.appendChild(createComponent('header', renderHeader()));
  slot.appendChild(renderMain());
  slot.appendChild(createComponent('footer', renderFooter()));
}

main();
