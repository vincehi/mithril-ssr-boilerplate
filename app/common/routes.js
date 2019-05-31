// Mithril base components
const Home = require('../pages/Home.js');
// const NotFound = require('.../app/pages/NotFound.js');
// const Section = require('../app/pages/Section.js');
// ...
var m = require('mithril');


// Plain routes (without language prefix)
const plainRoutes = {
    '/': Home,
    '/test/:test': Home,
    // '/sections/:key': Section,
    // // ...
    // '/:other': NotFound
};

module.exports = plainRoutes;
