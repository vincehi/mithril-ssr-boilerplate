import m from 'mithril';

interface Routes {
  [route: string]: {
    name: string;
    module: Promise<m.ComponentTypes<any>>;
  };
}

const routes: Routes = {
  '/': {
    name: 'Accueil',
    module: new Promise((resolve) => {
      import(/* webpackChunkName: "Home" */ '../pages/Home')
        .then(({ default: module }) => {
          resolve(module);
        })
        .catch((error) => {
          console.log(error);
        });
    }),
  },
  '/contact': {
    name: 'Contact',
    module: new Promise((resolve) => {
      import(/* webpackChunkName: "Contact" */ '../pages/Contact')
        .then(({ default: module }) => {
          // console.log(module);
          resolve(module);
        })
        .catch((error) => {
          console.log(error);
        });
    }),
  },
};

export default routes;
