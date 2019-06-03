const m = require('mithril');
const Header = require('./Header');
const Footer = require('./Footer');

const setHead = (vnode) => {
    const head = {};
    head.title = (vnode.attrs.title || '[MISSING TITLE]') + ' · ';
    if (vnode.attrs.slug === 'index') head.title = '';
    head.title += 'header.title';
    head.description = vnode.attrs.description;
    return head;
};

const LayoutClient = {
    oninit: (vnode) => {
        console.log('je suis initialisé')
    },

    oncreate: (vnode) => {
        console.log('je suis créer')
//         const head = setHead(vnode);
//         document.title = head.title;
//         $('meta[name=description]').replaceWith( '' );
    },
//
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
    oninit: vnode => {
        // vnode.state.head = setHead(vnode);
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
                    <title>Salut</title>,
                ]),
                m('body', [
                    <Header />,
                    <main id="mainContent">{vnode.children}</main>,
                    <Footer />,
                    <script src="/js/app.js" />
                ])
            ])
        ]
    }

};

module.exports = process.browser ? LayoutClient : LayoutServer;
