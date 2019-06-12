module.exports = {
    '/': {
        name: 'Accueil',
        component: () => new Promise(function(resolve) {
            require.ensure([], () => resolve(require('../pages/Home.js')), /* chunkFilename */ 'home')
        })
        // component: () => new Promise(function(resolve) {require(['../pages/Home.js'], resolve)}) // comme avant
    },
    '/contact': {
        name: 'Contact',
        component: () => new Promise(function(resolve) {
            require.ensure([], () => resolve(require('../pages/Contact.js')), /* chunkFilename */ 'contact')
        })
    }
};
