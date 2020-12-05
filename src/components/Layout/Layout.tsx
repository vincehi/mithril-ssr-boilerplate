import m from "mithril";
import Header from "./Header";
import Footer from "./Footer";
import { ssr } from "../../common/urql";
import test from "../../common/test";

function mainContent(vnode: m.CVnode): m.Children {
  return (
    <>
      <Header />
      {vnode.children}
      <Footer />
    </>
  );
}

export default class Layout implements m.ClassComponent {
  private title: string;

  constructor() {
    this.title = test.title;
  }

  view(vnode: m.CVnode): m.Children {
    return process.env.BROWSER_ENV ? (
      // Layout Client
      mainContent(vnode)
    ) : (
      // Layout Server
      <>
        {m("!doctype[html]")}
        <html lang="fr">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="description ici" />
            <title>{this.title}</title>
          </head>
          <body>
            <div id="mainContent">{mainContent(vnode)}</div>
            <script>{`window.urqlData = ${JSON.stringify(ssr.extractData())}`}</script>
            <script src="/js/app.js" />
          </body>
        </html>
      </>
    );
  }
}
