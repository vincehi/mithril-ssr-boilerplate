const m = require('mithril');

// var Data = {
//     todos: {
//         list: null,
//         fetch: function() {
//             m.request({
//                 method: "GET",
//                 url: "https://randomuser.me/api/",
//                 background: !process.browser
//             })
//                 .then(function(items) {
//                     Data.todos.list = items
//                 })
//         }
//     }
// };

var Home = {
    oninit: vnode => {
        // vnode.state.list = Data.todos.fetch
    },
    oncreate: vnode => {
    },

    view: vnode => {
        return (
            <div>
                Contenu de la page Home !
            </div>
        )
    }
}
// @todo : start test
// m.request({
//     method: "GET",
//     url: "https://randomuser.me/api/",
//     background: true // Permet de ne pas redessiner le composant apres réponse
// })
//     .then(resp => console.log(resp))
//     .catch((err) => {
//         console.log(err);
//     });
// end : test

export default Home;

