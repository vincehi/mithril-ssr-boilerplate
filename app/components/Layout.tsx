import m from '../../lib/m';
import Header from './Header';
import Footer from './Footer';

const Script = {
  view: (vnode) => {
    return (
      m('script', `window.preloadedState = ${vnode.attrs.stateman.getString()}`)
    );
  }
};

const mainContent = (vnode) => (
  <>
    <Header/>
    <vnode.attrs.module.tag stateman={vnode.attrs.module.stateman} />
    <Footer/>
  </>
);

const LayoutClient = {
  view: (vnode) => mainContent(vnode)
};

const LayoutServer = {
  view: (vnode) => {
    return (
      <>
        {m('!doctype[html]')}
        <html lang="fr">
          <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <meta name="description" content="description ici"/>
            <title>{vnode.attrs.module.tag.data.title}</title>
          </head>
          <body>
            <div id="mainContent">
              {mainContent(vnode)}
            </div>
            <Script stateman={vnode.attrs.module.stateman}/>
            <script src="/js/app.js"/>
          </body>
        </html>
      </>
    );
  }
};

export default process.env.BROWSER_ENV ? LayoutClient : LayoutServer;
