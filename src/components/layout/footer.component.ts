const html = String.raw;

export class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = html`
        <footer class="container">
          <small>© ${new Date().getFullYear()} Asset Grow. All rights reserved.</small>
        </footer>
      `;
    }
  }
}

customElements.define('app-footer', FooterComponent);
