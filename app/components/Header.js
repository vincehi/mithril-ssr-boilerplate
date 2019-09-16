const m = require('mithril');

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
                    <m.route.Link href="/contact" oncreate={m.route.Link}>Contact</m.route.Link>
                    <m.route.Link href="/">Home</m.route.Link>
                </nav>
            </header>
        )
    }
};
