const m = require('mithril');
const Layout = require('../components/Layout')

module.exports = {
    oninit: vnode => {

    },

    view: vnode => {
        return (
            <Layout>
                <main>
                    Contenu de la page Home
                </main>
            </Layout>
        )
    }
};
