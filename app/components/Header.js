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
                    <a href="/contact" oncreate={m.route.link}>Contact</a>
                    <a href="/" oncreate={m.route.link}>Home</a>
                </nav>
            </header>
        )
    }
};