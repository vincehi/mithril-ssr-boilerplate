const m = require('../common/m');

var Data = {
    todos: {
        list: [],
    }
};

module.exports = {
    data: {
        title: 'contact',
    },
    oninit: (vnode, waitFor = () => {}) => waitFor(new Promise((resolve) => {
        vnode.state.title = 'contact';
        const stateman = vnode.attrs.stateman;

        if (!stateman.get('contact.content')) {
            m.request({
                method: "GET",
                responseType: 'json',
                url: 'https://randomuser.me/api/',
                background: !process.browser, // not redraw on server
            })
                .then((content) => {
                    vnode.state.content = content;
                    stateman.set('contact.content', content);

                    global.stateman = stateman;

                    resolve(Data.todos.list = content.results[0]);
                })

        } else {
            resolve(Data.todos.list = stateman.get('contact.content').results[0])
        }
    })),
    view: () => {
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
