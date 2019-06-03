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

    // view: vnode => [
    //     m('!doctype[html]'),
    //     m('html', {lang: 'fr'}, [
    //         m('head', [
    //             m('meta', {charset: 'utf-8'}),
    //             m('meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}),
    //             m('meta', {'http-equiv': 'x-ua-compatible', content: 'ie=edge'}),
    //             m('title', 'vnode.state.head.title'),
    //             m('meta', {name: 'description', content: 'vnode.state.head.description'}),
    //             m('link', {rel: 'stylesheet', href: `/assets/css/styles.min.css`}),
    //             m('link', {rel: 'shortcut icon', href: '/assets/img/favicon.ico'})
    //         ]),
    //         m('body', [
    //             m(Header),
    //             vnode.children,
    //             // m('script', `window.__preloadedState = ${vnode.attrs.stateman._getString()}`),
    //             m('script', {src: `/js/app.js`})
    //         ])
    //     ])
    // ]
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
