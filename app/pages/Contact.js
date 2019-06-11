const m = require('mithril');

export default {
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
