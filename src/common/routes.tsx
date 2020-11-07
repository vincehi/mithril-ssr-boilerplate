import m from 'mithril';
import { Attrs as ContactAttrsType } from '../pages/Contact';

// Put Attrs of component in m.ComponentTypes<Attrs | ...>
interface Routes {
  [route: string]: {
    name: string;
    module: Promise<m.ComponentTypes<ContactAttrsType | any>>;
  };
}

const routes: Routes = {
  '/': {
    name: 'Accueil',
    module: new Promise((resolve, reject) => {
      import(/* webpackChunkName: "Home" */ '../pages/Home')
        .then(
          ({ default: module }) => resolve(module),
        )
        .catch((error) => {
          console.log(error);
        });
    }),
  },
  '/contact': {
    name: 'Contact',
    module: new Promise((resolve) => {
      import(/* webpackChunkName: "Contact" */ '../pages/Contact')
        .then(
          ({ default: module }) => resolve(module)
        )
        .catch((error) => {
          console.log(error);
        });
    }),
  },
};

export default routes;