import m from 'mithril';

interface Stateman {
  state: {
    [content: string]: object;
  };
}

export interface Attrs {
  stateman: Stateman;
}

// export default class Contact implements m.ClassComponent<Attrs> {
//   static title = 'contact title';
//
//   view(): m.Children {
//     return (
//       <div>
//         Contenu de la page Contact !!!
//       </div>
//     );
//   }
// }
export default class Contact {
  static title = 'contact title';

  view() {
    console.log('ici')
    return (
      <div>
        Contenu de la page Contact !!!
      </div>
    );
  }
}
