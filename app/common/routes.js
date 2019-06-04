const Home = require('../pages/Home.js');
const Contact = require('../pages/Contact.js');
// const NotFound = require('.../app/pages/NotFound.js');
// const Section = require('../app/pages/Section.js');

const plainRoutes = {
    '/': Home,
    '/contact': Contact,
    '/test/:test': Home,
    // '/:other': NotFound
};

module.exports = plainRoutes;
