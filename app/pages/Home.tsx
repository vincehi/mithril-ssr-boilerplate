import m from 'mithril';

const Home: m.Component = {
  data: {
    title: 'Home',
  },
  view: (vnode) => {
    return (
      <div>
        Contenu de la page Homepage !
      </div>
    );
  }
};

export default Home;
