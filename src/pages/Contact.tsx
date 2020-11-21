import m from 'mithril';

export default class Contact implements m.ClassComponent {
  static title = 'contact title';

  view(): m.Children {
    return <div>Contenu de la page Contact !!!</div>;
  }
}
