import {LitElement,html} from 'lit-element';

export class Tabla extends LitElement {

  static get properties(){
    return {
      lista: {type: Array}
    };
  }

  render(){
    return html`
    <div>
      <h1>Tabla de registros</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          ${
            this.lista.map((item)=>{
              return html`
              <tr>
                <td>${item.nombre}</td>
                <td>${item.apellido}</td>
                <td>${item.edad}</td>
              </tr>
              `;
            }
          )}
        </tbody>
      </table>
    </div>
    `;
  };
}

customElements.define('wc-tabla', Tabla);
