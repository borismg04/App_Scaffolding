import {html , LitElement , css} from 'lit-element';
import style from '../../styles/navbarStyle';
// import '../Boton/boton';

export class NavBar extends LitElement {
  static get styles(){
    return [style];
  }

  static get properties(){
    return {
      link: {type: Array, attribute:true},
    };
  };

  constructor(){
    super();
    this.link = [
      {
        texto: 'Home',
        ruta: '/',
      },
      {
        texto: 'Pagina 2',
        ruta: '/pagina2',
      },
      {
        texto: 'Pagina 3',
        ruta: '/pagina3',
      },

    ];
  };

  render(){
    return html`
    <div class="contendor-navbar">
    ${this.link.map((item) => html`
      <wc-boton .Objeto="${item}"></wc-boton>
    `)}
    </div>
    `;
  }
}

customElements.define('wc-navbar', NavBar);
