import Router from '@vaadin/router'

const routes = [
  {
    path: '/',
    component: 'home-view',
    action: async () => {
      await import('./views/home/home.js')
    }
  },
  {
    path: '/about',
    component: 'about-view',
    action: async () => {
      await import('./views/about/about.js')
    }
  },
]

const outlet = document.getElementById('outlet')

const router = new Router(outlet);

router.setRoutes(routes);

export default router;
