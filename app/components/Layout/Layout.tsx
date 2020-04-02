import m, {ClassComponent, ComponentTypes} from 'mithril';
import Header from './Header';
import Footer from './Footer';
import Script from './Script';

declare global {
  interface Window {
    preloadedState: object;
  }
}

// interface Ici {
//   (test: string): JSX.Element;
// }

interface One {
  module: any;
}

export interface Test {
  module: {
    stateman: object;
    // tag: Ici;
    tag: (() => m.Vnode) & {
      title?: string;
    };
  };
}

function mainContent(vnode: m.CVnode<Test>): any {
  return (
    <>
      <Header />
      {/*{console.log('la', vnode.attrs.module.tag)}*/}
      <vnode.attrs.module.tag stateman={vnode.attrs.module.stateman} />
      <Footer />
    </>
  );
}

export default class Layout implements m.ClassComponent<Test> {
  view(vnode: m.CVnode<Test>): any {
    return process.env.BROWSER_ENV ? (
      // Layout Client
      mainContent(vnode)
    ) : (
      // Layout Server
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
