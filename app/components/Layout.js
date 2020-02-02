const m = require('../common/m');
const Header = require('./Header');
const Footer = require('./Footer');
const Script = {
    oninit: (vnode, waitFor) => {

    },
    view: vnode => {
        return (
            m('script', `window.__preloadedState = ${vnode.attrs.stateman._getString()}`)
        )
    }
};


/**
 * Le Layout est initialisé qu'une seul fois au 1 er chargement.
 * @type {m}
 */
const LayoutClient = {

    oninit: (vnode) => {
    },

    view: vnode => {
        return [
            <Header />,
            m(vnode.attrs.component.tag, {stateman: vnode.attrs.component.stateman}),
            <Footer />
        ]
    }
};

const LayoutServer = {
    oninit: (vnode, waitFor) => {
    },
    view: vnode => {
        return [
            m('!doctype[html]'),
            m('html', {lang: 'fr'}, [
                m('head', [
                    <meta charset="utf-8" />,
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />,
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />,
                    <meta name="description" content="description ici" />,
                    <title>{vnode.attrs.component.tag.data.title}</title>,
                ]),
                m('body', [
                    <div id="mainContent">
                        <Header />
                        {m(vnode.attrs.component.tag, {stateman: vnode.attrs.component.stateman})}
                        <Footer />
                    </div>,
                    <Script stateman={vnode.attrs.component.stateman} />,
                    // m('script', `window.__preloadedState = ${vnode.attrs.component.stateman._getString()}`),
                    <script src="/js/app.js" />,
                ])
            ])
        ]
    }
};

module.exports = process.browser ? LayoutClient : LayoutServer;
