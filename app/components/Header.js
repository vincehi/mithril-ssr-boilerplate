const m = require('mithril');
// const m = require('../common/m');

module.exports = {
    oninit: vnode => {

    },

    oncreate: () => {

    },

    view: vnode => {
        return (
            <header>
                <div>The Header</div>
                <nav>
                    <m.route.Link href="/contact">Contact</m.route.Link>
                    <m.route.Link href="/">Home</m.route.Link>
                </nav>
            </header>
        )
    }
};
