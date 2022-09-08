import { LitElement, html, css } from 'lit';
import './components/Boton/boton';
import './views/home/home';
export class AppScaffolding extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
    this.title = 'My App Scaffold';
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <wc-home></wc-home>
      <!-- <wc-boton texto="Boton"></wc-boton> -->
    `;
  }
}
