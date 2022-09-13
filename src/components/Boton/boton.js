import {LitElement,html} from 'lit-element';
import style from '../../styles/botonStyle';

export class boton extends LitElement {
  static get properties() {
    return {
      Objeto: {type: Object , attribute:true},
    };
  }
  constructor(){
    super();
    this.Objeto = {
      texto: 'Boton',
      ruta: '/',
    };
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
    <a href="${this.Objeto.ruta}">
      <button @mousedown="${this.mouseDownListener}" @mouseup="${this.mouseUpListener}">${this.Objeto.texto}</button>
    </a>
    `;
  }
}

customElements.define('wc-boton', boton);
