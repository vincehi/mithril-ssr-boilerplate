const m = require('mithril');

var Data = {
    todos: {
        list: [],
        fetch: function() {
            m.request({
                method: "GET",
                responseType: 'json',
                url: 'https://randomuser.me/api/',
                background: !!process.browser,
                async: true
            })
                .then(function(items) {
                    Data.todos.list = items
                })
        }
    }
}

module.exports = {
    oninit: vnode => {
        console.log('oninit')
        Data.todos.fetch();

    },

    view: vnode => {
        return (
            <div>
                {console.log('view')}
                {console.log(Data.todos.list)}
                Contenu de la page Contact !
            </div>
        )
    }
};
