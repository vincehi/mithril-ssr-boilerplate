const m = require('../common/m');
const Header = require('./Header');
const Footer = require('./Footer');

const Script = {
    view: vnode => {
        return (
            m('script', `window.__preloadedState = ${vnode.attrs.stateman._getString()}`)
        )
    }
};

const LayoutClient = {
    view: vnode => {
        return [
            <Header />,
            m(vnode.attrs.module.tag, {stateman: vnode.attrs.module.stateman}),
            <Footer />
        ]
    }
};

const LayoutServer = {
    view: vnode => {
        return [
            m('!doctype[html]'),
            m('html', {lang: 'fr'}, [
                m('head', [
                    <meta charset="utf-8" />,
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />,
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />,
                    <meta name="description" content="description ici" />,
                    <title>{vnode.attrs.module.tag.data.title}</title>,
                ]),
                m('body', [
                    <div id="mainContent">
                        <Header />
                        {m(vnode.attrs.module.tag, {stateman: vnode.attrs.module.stateman})}
                        <Footer />
                    </div>,
                    <Script stateman={vnode.attrs.module.stateman} />,
                    <script src="/js/app.js" />,
                ])
            ])
        ]
    }
};

module.exports = process.browser ? LayoutClient : LayoutServer;
