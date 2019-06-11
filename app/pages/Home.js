const m = require('mithril');
// const Layout = require('../components/Layout');

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

