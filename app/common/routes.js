module.exports = {
    '/': {
        name: 'Accueil',
        module: () => new Promise(function(resolve) {
            require.ensure([], () => resolve(require('../pages/Home.js')), /* chunkFilename */ 'home')
        })
    },
    '/contact': {
        name: 'Contact',
        module: () => new Promise(function(resolve) {
            require.ensure([], () => resolve(require('../pages/Contact.js')), /* chunkFilename */ 'contact')
        })
    }
};
