import m from 'mithril';

export default class Contact implements m.ClassComponent {
  static title = 'contact title';


  oninit() {
    console.log('la !')
  }

  view(): m.Children {
    return (
      <div>
        Contenu de la page Contact !!!
      </div>
    );
  }
}
