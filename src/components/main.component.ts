import { doSomething } from "../domain/main.function";

export function setupMain() {
  const slot = document.querySelector('body');
  if (!slot) throw new Error('Body slot not found');
  const main = document.createElement('main');
  main.innerHTML = renderMain();
  slot.appendChild(main);
}

function renderMain() {
  const html = String.raw;
  const alertButton = html`<button onclick="alert('Hello')">Click me</button>`;
  const main = html`<section>${doSomething()} ${alertButton}</section>`;
  return main;

}



