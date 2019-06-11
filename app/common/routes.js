const m = require('mithril');

module.exports = {
    '/': {
        name: 'Accueil',
        component: () => import(/* webpackChunkName: "home" */ '../pages/Home.js').then(({default: resp}) => {
            return resp
        })
    },
    '/contact': {
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../pages/contact.js').then(({default: resp}) => {
            return resp
        })
    }
};
