const m = require('mithril');
const Layout = require('../components/Layout');

module.exports = m(
    Layout, m({
        oninit: vnode => {
            console.log('la')
        },

        view: vnode => {
            return (
                <main>
                    Contenu de la page Home !
                </main>
            )
        }
    })
);
