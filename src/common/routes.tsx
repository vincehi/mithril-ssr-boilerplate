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
    module: async () => {
      const {default: module} = await import(/* webpackChunkName: "Home" */ '../pages/Home');
      return module
    },
    // module: () => import(/* webpackChunkName: "Home" */ '../pages/Home'),
  },
  '/contact': {
    name: 'Contact',
    module: async () => {
      const {default: module} = await import(/* webpackChunkName: "Contact" */ '../pages/Contact')
      return module;
    },
  },
  // '/contact': {
  //   name: 'Contact',
  //   module: new Promise((resolve) => {
  //     import(/* webpackChunkName: "Contact" */ '../pages/Contact')
  //       .then(
  //         ({ default: module }) => resolve(module)
  //       )
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }),
  // },
};

export default routes;
