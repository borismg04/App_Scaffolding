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
  }

  static get styles() {
    return [style];
  }

  firstUpdated(){
    this.boton = this.shadowRoot.querySelector('button');
  }

  mouseDownListener(event){
    this.boton.style.backgroundColor = '0 0 0 1px #3f3f3f';
  };
  mouseUpListener(event){
    this.boton.style.backgroundColor = '0 0 0 1px #6dff75';
  };

  render() {
    return html`
      <button @mousedown="${this.mouseDownListener}" @mouseup="${this.mouseUpListener}">${this.texto}</button>
    `;
  }
}

customElements.define('wc-boton', boton);
