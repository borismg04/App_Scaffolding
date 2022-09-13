import {html , LitElement , css} from 'lit-element';
export class Pagina3 extends LitElement {
  render(){
    return html`
    <div>
      <h1>Hola desde la Pagina 3</h1>
    </div>
    `;
  };
}

customElements.define('wc-pagina3', Pagina3);
