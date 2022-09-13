import {LitElement,html} from 'lit-element';
import './tabla';
import './registro';
export class Home extends LitElement {
  static get properties(){
    return {
      lista: {type: Array}
    };
  };

  constructor(){
    super();
    this.lista = [
      {nombre:'Boris',apellido:'Monroy',edad:29},
      {nombre:'Vodka',apellido:'Monroy Triviño',edad:9},
      {nombre:'Aryana',apellido:'Grannata',edad:1.3},
    ];
  }

  agregarAlista(event){
    let newLista = Object.assign([],this.lista);
    newLista.push(event.detail);
    this.lista = newLista;
  }

  render() {
    return html`
    <div>
      <h1>Home</h1>
      <wc-registro @guardarPersona="${this.agregarAlista}"></wc-registro>
      <wc-tabla .lista="${this.lista}"></wc-tabla>
    </div>
    `;
  }
}

customElements.define('wc-home', Home);
