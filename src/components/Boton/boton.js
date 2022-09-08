import {LitElement,html} from 'lit-element';
import style from '../../styles/botonStyle';

export class boton extends LitElement {

  static get styles() {
    return [style];
  }

  constructor() {
      super();
  }

  render() {
      return html`
          <button>Boton</button>
      `;
  }
}

customElements.define('wc-boton', boton);
