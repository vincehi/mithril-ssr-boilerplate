// const Home = require('../pages/Home.js');
// const Contact = require('../pages/Home.js');
// const NotFound = require('.../app/pages/NotFound.js');
// const Section = require('../app/pages/Section.js');
const m = require('mithril');


module.exports = {
    '/': {
        name: 'Accueil',
        // component: process.browser ? new Promise ((resolve) => require(['../pages/Home.js'], resolve)) : require('../pages/Home.js')
        component: () =>  import('../pages/Home.js').then(({default: resp}) => {
            // console.log(resp)
            return resp
        })
    },
    '/contact': {
        name: 'Contact',
        // component: process.browser ? new Promise ((resolve) => require(['../pages/Home.js'], resolve)) : require('../pages/Home.js')
        component: () => import('../pages/contact.js').then(({default: resp}) => {
            // console.log(resp)
            return resp
        })
    },
    // '/contact': {
    //     name: 'Contact',
    //     component: (resolve) => {return process.browser ? require(['../pages/Contact.js'], resolve) : require('../pages/Contact.js')}
    // }
    // '/contact': {
    //     name: 'Contact',
    //     component: import('../pages/Home.js').then(resp => {
    //         return resp
    //     })
    // },
    // '/test/:test': Home,
    // '/:other': NotFound
};
