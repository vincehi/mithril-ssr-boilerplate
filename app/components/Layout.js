const m = require('mithril');
const Header = require('./Header');
const Footer = require('./Footer');

/**
 * Le Layout est initialisé qu'une seul fois au 1 er chargement.
 * @type {m}
 */
const LayoutClient = {

    view: vnode => {
        console.log(vnode)
        return [
            <Header />,
                vnode.children,
            <Footer />
        ]
    }
};

const LayoutServer = {
    oncreate: vnode => {
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
                    <title>{vnode.attrs.title}</title>,
                ]),
                m('body', [
                    <div id="mainContent">
                        <Header />
                        {vnode.children}
                        <Footer />
                    </div>,
                    <script src="/js/app.js" />
                ])
            ])
        ]
    }

};

module.exports = process.browser ? LayoutClient : LayoutServer;
