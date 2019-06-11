const m = require('mithril');

export default {
    oninit: vnode => {
        console.log('home')
    },
    oncreate: vnode => {
    },

    view: vnode => {
        return (
            <div>
                Contenu de la page Home !
            </div>
        )
    }
};

