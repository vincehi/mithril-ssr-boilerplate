const m = require('mithril');

module.exports = {
    oninit: vnode => {

    },

    oncreate: () => {
        // Get all "navbar-burger" elements
        const superr = 'superr';
    },

    view: vnode => {
        return (
            <header>
                <div>uperr header</div>
                <nav>
                    <a href="/contact">Contact</a>
                    <a href="/">Home</a>
                </nav>
            </header>
        )
    }
};
