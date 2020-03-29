import m from 'mithril';
import Header from './Header';
import Footer from './Footer';

declare global {
  interface Window {
    preloadedState: object;
  }
}

interface Attrs {
  stateman: {
    getString: () => object;
  };
}

class Script implements m.ClassComponent<Attrs> {
  view({ attrs: { stateman } }: m.Vnode<Attrs>): m.Children {
    return (
      <script>
        {window.preloadedState = stateman.getString()}
      </script>
    );
  }
}


const mainContent = (vnode) => (
  <div>
    <Header />
    <vnode.attrs.module.tag stateman={vnode.attrs.module.stateman} />
    <Footer />
  </div>
);

class LayoutClient implements m.ClassComponent {
  view(vnode) {
    return (
      mainContent(vnode)
    );
  }
}

class LayoutServer implements m.ClassComponent {
  view(vnode) {
    return (
      <>
        {m('!doctype[html]')}
        <html lang="fr">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="description ici" />
            <title>{vnode.attrs.module.tag.title}</title>
          </head>
          <body>
            <div id="mainContent">
              {mainContent(vnode)}
            </div>
            <Script stateman={vnode.attrs.module.stateman} />
            <script src="/js/app.js" />
          </body>
        </html>
      </>
    );
  }
}

export default process.env.BROWSER_ENV ? LayoutClient : LayoutServer;
