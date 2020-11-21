import m from 'mithril';
import { SSRExchange } from '@urql/core/dist/types/exchanges/ssr';
import Header from './Header';
import Footer from './Footer';

function mainContent(vnode: m.CVnode<Attrs>): m.Children {
  return (
    <>
      <Header test={{ ste: 'hdgsd' }} />
      {vnode.children}
      <Footer />
    </>
  );
}

interface Attrs {
  ssr: SSRExchange;
}

export default class Layout implements m.ClassComponent<Attrs> {
  view(vnode: m.CVnode<Attrs>): m.Children {
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
            {/* <title>{vnode.attrs.module.tag.title}</title> */}
          </head>
          <body>
            <div id="mainContent">{mainContent(vnode)}</div>
            {/* {process.env.DEBUG && ( */}
            {/*  <div id="tracer" style="position: fixed; top: 0px; right: 0px;"></div> */}
            {/* )} */}
            <script>{`window.urqlData = ${JSON.stringify(vnode.attrs.ssr.extractData())}`}</script>
            <script src="/js/app.js" />
          </body>
        </html>
      </>
    );
  }
}
