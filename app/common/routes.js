// import Home from '../pages/Home.js';
// import Contact from '../pages/Contact.js';

const routes = {
  '/': {
    name: 'Accueil',
    module: () => new Promise((resolve) => {
      import(/* webpackChunkName: "Home" */ '../pages/Home.js').then(({ default: resp }) => {
        resolve(resp);
      });
      // resolve(Home);
    })
  },
  '/contact': {
    name: 'Contact',
    module: () => new Promise((resolve) => {
      import(/* webpackChunkName: "Contact" */ '../pages/Contact.js').then(({ default: resp }) => {
        resolve(resp);
      });
      // resolve(Contact);
    })
  }
};

export default routes;
