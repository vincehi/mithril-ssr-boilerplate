// import Home from '../pages/Home.tsx';
// import Contact from '../pages/Contact.tsx';

const routes = {
  '/': {
    name: 'Accueil',
    module: () => new Promise((resolve) => {
      import(/* webpackChunkName: "Home" */ '../pages/Home').then(({ default: resp }) => {
        resolve(resp);
      });
      // resolve(Home);
    })
  },
  '/contact': {
    name: 'Contact',
    module: () => new Promise((resolve) => {
      import(/* webpackChunkName: "Contact" */ '../pages/Contact').then(({ default: resp }) => {
        resolve(resp);
      });
      // resolve(Contact);
    })
  }
};

export default routes;
