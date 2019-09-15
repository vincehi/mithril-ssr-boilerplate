const m = require('mithril');
const Layout = require('../components/Layout');


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
        console.log(vnode)
        resolve(Data.todos.fetch());
    }),
    view: vnode => {
        return (
            <div>
                {console.log('view')}
                {console.log(Data.todos.list)}
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
