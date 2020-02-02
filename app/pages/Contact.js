const m = require('../common/m');
// const m = require('../common/m');

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
    oninit: (vnode, waitFor = () => {}) => waitFor(new Promise((resolve) => {
        console.log('1')
        const stateman = vnode.attrs.stateman;

        if (!stateman.get('contact.content')) {
            m.request({
                method: "GET",
                responseType: 'json',
                url: 'https://randomuser.me/api/',
                background: !process.browser, // not redraw on server
            })
                .then((content) => {
                    console.log('1.1')
                    vnode.state.content = content;
                    stateman.set('contact.content', content);
                    resolve(Data.todos.list = content.results[0]);
                })
        } else {
            resolve(Data.todos.list = stateman.get('contact.content').results[0])
        }
    })),
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
