import {html , LitElement , css} from 'lit-element';

export class Pagina2 extends LitElement {
  render(){
    return html`
    <div>
      <h1>Hola desde la Pagina 2</h1>
    </div>
    `;
  };
}

customElements.define('wc-pagina2', Pagina2);
