module.exports = {
    '/': {
        name: 'Accueil',
        component: () => new Promise(function(resolve) {
            require.ensure([], () => resolve(require('../pages/Home.js')), /* chunkFilename */ 'home')
        })
    },
    '/contact': {
        name: 'Contact',
        component: () => new Promise(function(resolve) {
            require.ensure([], () => resolve(require('../pages/Contact.js')), /* chunkFilename */ 'contact')
        })
    }
};
