import m from 'mithril';

export default class Home implements m.ClassComponent {
  static title = 'home title';

  oninit(vnode: m.CVnode) {
  }

  view(): m.Children {
    return (
      <div>
        Contenu de la page Homepage !
      </div>
    );
  }
}
