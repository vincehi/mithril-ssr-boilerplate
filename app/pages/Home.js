const m = require('mithril');
const Layout = require('../components/Layout');


module.exports = <Layout title={'Accueil'}>{
    m({
        oninit: vnode => {

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
    })
}</Layout>;
