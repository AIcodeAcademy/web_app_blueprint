import './styles/theme.css';

const html = String.raw;

const appContent = html`
  <div>
    <h1>Vite + TypeScript</h1>
    <p>Hello World</p>
  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appContent;


