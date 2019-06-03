const m = require('mithril');

module.exports = {
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
};
