const m = require('mithril');
let routes = require('./../common/routes')

module.exports = {
    oninit: vnode => {

    },

    oncreate: () => {
        // Get all "navbar-burger" elements
        const superr = 'superr';
        console.log(routes)
    },

    view: vnode => {
        return (
            <header>
                <div>uperr header</div>
                <nav>
                    {console.log(m.route.get())}
                    {console.log(routes)}
                    <a href="/contact" oncreate={m.route.link}>Contact</a>
                    <a href="/" oncreate={m.route.link}>Home</a>
                </nav>
            </header>
        )
    }
};
