import axios from 'axios';
import m from 'mithril';

// const port = process.env.PORT || 5000;
// const localUrl = 'http://' + (process.browser ? window.location.host : '127.0.0.1:' + port);
// const localData = localUrl + '/docs';

export interface Stateman {
  state: {
    [content: string]: object;
  };
}

export default function (
  stateman: object,
  url: string,
  objectKey: string,
  resolve: (state: object) => void,
): void {

  if (!stateman().contact) {
    axios.get(url)
      .then((resp) => {
        if (process.env.BROWSER_ENV) {
          m.redraw();
        }
        return resolve(stateman({contact: resp.data}));
      })
      .catch((error) => {
        console.log(error);
        return;
      })
      .then(() => {
        // always executed
      });
  }
}
