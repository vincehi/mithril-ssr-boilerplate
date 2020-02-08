import m from '../common/m';
import axios from 'axios';

var Data = {
    todos: {
        list: [],
    }
};

export default {
    data: {
        title: 'contact',
    },
    oninit: (vnode, waitFor = () => null) => waitFor(new Promise((resolve) => {
        vnode.state.title = 'contact';
        const stateman = vnode.attrs.stateman;

        if (!stateman.get('contact.content')) {

            axios.get('https://randomuser.me/api/')
                .then((content) => {
                    vnode.state.content = content.data;
                    stateman.set('contact.content', content.data);

                    resolve(Data.todos.list = content.data.results[0]);
                    process.browser && m.redraw()
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });

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
