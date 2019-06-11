const m = require('mithril');

module.exports = {
    '/': {
        name: 'Accueil',
        component: () => import('../pages/Home.js').then(({default: resp}) => {
            return resp
        })
    },
    '/contact': {
        name: 'Contact',
        component: () => import('../pages/contact.js').then(({default: resp}) => {
            return resp
        })
    }
};
