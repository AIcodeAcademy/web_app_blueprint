import { doSomething } from "../domain/main.function";

export function renderMain() {
  const component = document.createElement('main');
  const html = String.raw;
  const alertButtonHtml = html`<button class="alertButton">Click me</button>`;
  const componentHtml = html`
  <article>
    <header>
      <h1>Hello world!</h1>
      <p>This is a simple web app with Vite, Pico CSS, and TypeScript.</p>
    </header>
    <section>
      <span>${doSomething()}</span> ${alertButtonHtml}
    </section>
  </article>
  `;
  component.innerHTML = componentHtml;
  const alertButton =component.getElementsByClassName('alertButton')[0];
  alertButton?.addEventListener('click', onAlertButtonClick);
  return component;
}     

function onAlertButtonClick() {
  alert('Hello');
  console.log('Hello');
}
