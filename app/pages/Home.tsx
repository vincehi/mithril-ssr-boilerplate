import m from 'mithril';

export default class Home implements m.ClassComponent {
  static title = 'home title';

  view() {
    return (
      <div>
        Contenu de la page Homepage !
      </div>
    );
  }
}
