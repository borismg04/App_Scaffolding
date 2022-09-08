import {LitElement,html} from 'lit-element';
import style from '../../styles/botonStyle';

export class boton extends LitElement {
  static get properties() {
    return {
      texto: {type: String , attribute:true},
    };
  }
  constructor(){
    super();
    // this.texto = 'Boton';
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <button>${this.texto}</button>
    `;
  }
}

customElements.define('wc-boton', boton);
