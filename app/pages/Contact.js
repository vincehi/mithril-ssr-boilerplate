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
    oninit: vnode => new Promise((resolve) => {
        resolve(Data.todos.fetch());
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
