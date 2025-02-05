import { doSomething } from '../logic/main.function';

export function createMain() {
  const component = document.createElement('main');
  const html = String.raw;
  const alertButtonHtml = html`<button class="alertButton">Click me</button>`;
  const componentHtml = html` <article>
    <header>
      <h1>Asset Grow</h1>
      <p>Calculate your investment growth over time</p>
    </header>
    <section><span>${doSomething()}</span> ${alertButtonHtml}</section>
  </article>`;
  component.innerHTML = componentHtml;
  const alertButton = component.getElementsByClassName('alertButton')[0];
  alertButton?.addEventListener('click', onAlertButtonClick);
  return component;
}

function onAlertButtonClick() {
  alert('Hello from Asset Grow');
  console.log('Hello from Asset Grow');
}
