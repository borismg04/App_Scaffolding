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
        id:"",
        path:"",
        component:"",
        action:"",
      }
    ];
  }

  transformar(link){
  return link.map((item) =>{
    return {
      texto: item.id,
      ruta: item.path,
    }
    })
  };


  render(){
    return html`
    <div class="contendor-navbar">
    ${this.transformar(this.link).map((item) => html`
      <wc-boton .Objeto="${item}"></wc-boton>
    `)}
    </div>
    `;
  }
}

customElements.define('wc-navbar', NavBar);
