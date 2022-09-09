import {LitElement,html} from 'lit-element';

export class Registro extends LitElement {
    static get properties(){
      return {
        nombre: {type: String},
        apellido: {type: String},
        edad: {type: Number}
      };
    }

    constructor(){
      super();
      this.nombre = '';
      this.apellido = '';
      this.edad = '';
    }

    manejador(nombre){
      return (event)=>{
        let valor = event.target.value;
        this[nombre] = valor;
      };
    }

    guardar(){
      let detail = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad
      };
      let opciones = {
        bubbles: true,
        detail: detail,
        composed: true
      };
      this.dispatchEvent(new CustomEvent('guardarPersona', opciones));
    }

    render(){
      return html`

        <h1>Registrar Datos</h1>
        <form>
          <label>Nombre<input @input="${this.manejador('nombre')}" .value="${this.nombre}"/></label>
          <label>Apellido<input @input="${this.manejador('apellido')}" .value="${this.apellido}"/></label>
          <label>Edad<input @input="${this.manejador('edad')}" .value="${this.edad}"/></label>
          <button @click="${this.guardar}" type="button">Guardar</button>
        </form>
      `;
    };
}

customElements.define('wc-registro', Registro);
