import {Router} from '@vaadin/router'
import '../views/home/home';
import '../views/Pagina2/pagina2';
import '../views/Pagina3/pagina3';

const routes = [
  {
    path: '/',
    component: 'wc-home',
    action: async () => {
      await import('../views/home/home.js')
    }
  },
  {
    path: '/pagina2',
    component: 'wc-pagina2',
    action: async () => {
      await import('../views/Pagina2/pagina2.js')
    }
  },
  {
    path: '/pagina3',
    component: 'wc-pagina3',
    action: async () => {
      await import('../views/Pagina3/pagina3.js')
    }
  }
]

// const outlet = document.getElementById('outlet')

const router = new Router();

router.setRoutes(routes);

export default router;
