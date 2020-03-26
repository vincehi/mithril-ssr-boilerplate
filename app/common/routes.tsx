type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void;

interface Routes {
  [route: string]: {
    name: string;
    module: () => any;
  };
}

const routes: Routes = {
  '/': {
    name: 'Accueil',
    module: () => new Promise((resolve: PromiseResolve<object>) => {
      import(/* webpackChunkName: "Home" */ '../pages/Home').then(({ default: resp }) => {
        resolve(resp);
      });
    }),
  },
  '/contact': {
    name: 'Contact',
    module: () => new Promise((resolve) => {
      import(/* webpackChunkName: "Contact" */ '../pages/Contact').then(({ default: resp }) => {
        resolve(resp);
      });
    }),
  },
};

export default routes;
