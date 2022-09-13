import {html , LitElement , css} from 'lit-element';
import style from '../../styles/navbarStyle';
// import '../Boton/boton';

export class NavBar extends LitElement {
  static get styles(){
    return [style];
  }

  render(){
    return html`
    <div class="contendor-navbar">
      <wc-boton texto="Pagina 1"></wc-boton>
      <wc-boton texto="Pagina 2"></wc-boton>
      <wc-boton texto="Pagina 3"></wc-boton>
    </div>
    `;
  }
}

customElements.define('wc-navbar', NavBar);
