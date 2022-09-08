import { LitElement, html, css } from 'lit';
import './components/Boton/boton';
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
    this.title = 'My app';
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <p>Hola mundo</p>
      <wc-boton></wc-boton>
    `;
  }
}
