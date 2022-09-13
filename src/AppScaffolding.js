import { LitElement, html, css } from 'lit';
import {Router} from '@vaadin/router'
import './components/Boton/boton';
import './components/NavBar/navbar';
import './views/home/home';
// import router from './routes/Routes';
import './views/Pagina2/pagina2';
import './views/Pagina3/pagina3';

const routes = [
  {
    id: 'home',
    path: '/',
    component: 'wc-home',
    action: async () => {
      await import('./views/home/home');
    }
  },
  {
    id: 'pagina2',
    path: '/pagina2',
    component: 'wc-pagina2',
    action: async () => {
      await import('./views/Pagina2/pagina2.js')
    }
  },
  {
    id: 'pagina3',
    path: '/pagina3',
    component: 'wc-pagina3',
    action: async () => {
      await import('./views/Pagina3/pagina3.js')
    }
  },
  {
    id: 'pagina4',
    path: '/pagina4',
    component: 'wc-pagina4',
    action: async () => {
      await import('./views/Pagina4/pagina4.js')
    }
  }
]

export class AppScaffolding extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
    this.title = 'My App Scaffold';
  }

  render() {
    const router = new Router(document.getElementById('outlet'));
    router.setRoutes(routes);

    return html`
      <h1>${this.title}</h1>
      <wc-navbar .link="${routes}"></wc-navbar>
      <slot></slot>
      <!-- <wc-home></wc-home> -->
      <!-- <wc-boton texto="Boton"></wc-boton> -->
    `;
  }
}
