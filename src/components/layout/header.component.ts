const html = String.raw;

export class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = html`
        <header>
          <nav class="container-fluid">
            <ul>
              <li><strong>Asset Grow</strong></li>
            </ul>
            <ul>
              <li><a href="#" role="button">Calculator</a></li>
              <li><a href="#" role="button">Summary</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }
}

customElements.define('app-header', HeaderComponent);
