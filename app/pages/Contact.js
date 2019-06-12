const m = require('mithril');

module.exports = {
    oninit: vnode => {
        console.log('contact')
    },

    view: vnode => {
        return (
            <div>
                Contenu de la page Contact !
            </div>
        )
    }
};
