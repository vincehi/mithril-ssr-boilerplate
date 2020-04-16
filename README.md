# Presentation
Server :
- The server: Koajs
- Server side route: koa-router
- Static files served by the server: koa-static
- Server side rendering: mithril-node-render + mithril

client :
- virtual dom: mithril

# Start
To start the project, just clone it. Then, make an install `npm to install` the dependencies. Then, to start the server and webpack compilation, `npm run watch`. The server restarts with each change made on the configuration.

# Constraints
The goal here is to create a site server side rendering very small size while keeping the power of the big front frameworks.
I do not want to load a superfluous library and maximize the library power I have at my disposal.

# To be continued
- Later, I would develop a way to query on an external API.
- For resource management, I integrate Strapi which is a Headless CMS.

# Resources
- [creating a node express webpack app with dev and prod builds](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)
- [speed up nodejs server side developpement with webpack 4](https://oramind.com/speed-up-nodejs-server-side-development-with-webpack-4-hmr/)
- [React + koaj (ssr)](https://github.com/tokenfoundry/koa-react-ssr-example)
- [isomorphic Mithril](https://isomorphic-mithril.mvlabs.it/en/)
- [Mithril node render](https://github.com/MithrilJS/mithril-node-render)
- [Mithril ssr exemple](https://gist.github.com/StephanHoyer/bddccd9e159828867d2a)
- [ssr dependency mocking is the answer](https://hackernoon.com/ssr-dependency-mocking-is-the-answer-d8d8c371aa94)
- [Readme for mithril request server](https://github.com/MithrilJS/mithril-node-render/issues/89)
- [Typescript + Babel](https://github.com/Microsoft/TypeScript-Babel-Starter)
- [Meiosis](http://meiosis.js.org)
- [A lire](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4hcYgAIA5jFJxpkgLyTgAHTSTJANwgwA7oh3KAfJI1atWABRqQENAAcArsTsVVFy1u0YozmCNtfAxiYgAnOHwsBQovb3oHF2IjGFMdELDI-GpCDDRZaxh8Ygxw2WJ8X38YAEp4yVZ6tFYNDXEpDEdHZUlrWvT1TUlYKRjFFQByCTLiSbbh8LlncM0h710DI3705Aarawrxj3XvS2P9y1z82SC-AMHx3uqA1uHvJrj38+tJwgBGSYecbNbwAXS8bzeGiw0VozgY1gAJrRqM4cAx8AAjWhIgCeHi6jlqlBAcBgsGoxAg9AQPAALIgAMz0tgcECYHB4HJwAQ0eiMZg8NhgqhQBwAazpqA5XDwWAgxEI4WgpJW5B4JGIjjgiAA9HqEY4JdIcrQsHqFUqVVAAAL-fAOgBslsVyug+H4pOIeMc3DJ1BVjlErDBrCAA)
- [Aussi](https://github.com/paldepind/flyd)
- [10++ TypeScript Pro tips/patterns](https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680)
