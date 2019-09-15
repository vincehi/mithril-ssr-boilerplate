const m = require('mithril');

module.exports = {
    oninit: vnode => {

    },

    oncreate: () => {

    },

    view: vnode => {
        return (
            <header>
                <div>uperr header</div>
                <nav>
                    {m(m.route.Link, {href: "/contact"}, 'Contact')}
                    {m(m.route.Link, {href: "/"}, 'Home')}
                    {/*<a href="/contact" oncreate={m.route.Link}>Contact</a>*/}
                    {/*<a href="/" oncreate={m.route.Link}>Home</a>*/}
                </nav>
            </header>
        )
    }
};
