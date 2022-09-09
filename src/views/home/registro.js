import {LitElement,html} from 'lit-element';

export class Registro extends LitElement {
    static get properties(){
      return {
        lista: {type: Array}
      };
    }
    render(){
      return html`

        <h1>Registrar Datos</h1>
        <form>
          <label>Nombre<input/></label>
          <label>Apellido<input/></label>
          <label>Edad<input/></label>
          <button type="button">Registrar</button>
        </form>
      `;
    };
}

customElements.define('wc-registro', Registro);
