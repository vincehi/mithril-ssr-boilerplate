const m = require('mithril');
const Layout = require('../components/Layout');

module.exports = <Layout title={'Contact'}>{
    m({
        oninit: vnode => {
            console.log('la')
        },

        view: vnode => {
            return (
                <div>
                    Contenu de la page Contact !
                </div>
            )
        }
    })
}</Layout>;
