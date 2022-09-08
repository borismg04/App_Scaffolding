import {LitElement,html} from 'lit-element';

export class Tabla extends LitElement {
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
      </table>
    </div>
    `;
  };
}

customElements.define('wc-tabla', Tabla);
