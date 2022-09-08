import {LitElement,html} from 'lit-element';
import { Tabla } from './tabla';

export class Home extends LitElement {
  render() {
    return html`
    <div>
      <h1>Home</h1>
      <wc-tabla></wc-tabla>
    </div>
    `;
  }
}

customElements.define('wc-home', Home);
