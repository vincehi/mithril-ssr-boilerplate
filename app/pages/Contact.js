const m = require('../common/m');
// const m = require('../common/m');
const safeGet = require('lodash/get');
const safeSet = require('lodash/set');

var Data = {
    todos: {
        list: [],
        fetch: function() {
            return new Promise(function(resolve) {
                m.request({
                    method: "GET",
                    responseType: 'json',
                    url: 'https://randomuser.me/api/',
                    background: !process.browser, // not redraw on server
                })
                .then(function(items) {
                    resolve(Data.todos.list = items.results[0])
                })
            })
        }

    }
};

module.exports = {
    oninit: vnode => new Promise((resolve) => {

        const stateman = vnode.attrs.stateman

        if (process.browser) {

            console.log(vnode)

            stateman.state = window.__preloadedState;

            console.log(stateman.get('contact.content'))

            if (!stateman.get('contact.content')) {
                console.log('passer le not get')
                m.request({
                    method: "GET",
                    responseType: 'json',
                    url: 'https://randomuser.me/api/',
                    background: !process.browser, // not redraw on server
                })
                    .then((content) => {
                        console.log('set')
                        vnode.state.content = content;
                        stateman.set('contact.content', content);
                        // console.log(window.__preloadedState.get('contact.content'))
                        resolve(Data.todos.list = content.results[0])
                    })
            } else {
                console.log('get')
                stateman.get('contact.content');
                resolve(Data.todos.list = stateman.state.contact.content.results[0])
            }
        } else {

            if (!vnode.attrs.stateman.get('contact.content')) {
                console.log('passer le not get')
                m.request({
                    method: "GET",
                    responseType: 'json',
                    url: 'https://randomuser.me/api/',
                    background: !process.browser, // not redraw on server
                })
                    .then((content) => {
                        console.log('set')
                        vnode.state.content = content;
                        stateman.set('contact.content', content);
                        console.log(stateman.get('contact.content'))
                        resolve(Data.todos.list = content.results[0])
                    })
            } else {
                console.log('get')
                stateman.get('contact.content')
            }
        }




    }),
    view: vnode => {
        return (
            <div>
                {Data.todos.list.name ?
                    [
                        <div>
                            {Data.todos.list.name.first}
                        </div>
                    ] : "loading"
                }
                Contenu de la page Contact !
            </div>
        )
    }
};
