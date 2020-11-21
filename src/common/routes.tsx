import Contact from '../pages/Contact';
import Home from '../pages/Home';

// Put Attrs of component in m.ComponentTypes<Attrs | ...>
interface Routes {
  [route: string]: {
    readonly name: string;
    module(): Promise<typeof Home | typeof Contact>;
  };
}

const routes: Routes = {
  '/': {
    name: 'Accueil',
    module: async () => {
      const { default: module } = await import(/* webpackChunkName: "Home" */ '../pages/Home');
      return module;
    },
  },
  '/contact': {
    name: 'Contact',
    module: async () => {
      const { default: module } = await import(
        /* webpackChunkName: "Contact" */ '../pages/Contact'
      );
      return module;
    },
  },
};

export default routes;
