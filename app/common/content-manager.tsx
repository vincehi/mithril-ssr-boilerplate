import axios, { AxiosResponse } from 'axios';
import m from 'mithril';

// const port = process.env.PORT || 5000;
// const localUrl = 'http://' + (process.browser ? window.location.host : '127.0.0.1:' + port);
// const localData = localUrl + '/docs';

interface Stateman {
  get: (url: string) => object;
  set: (key: string, value: object) => void;
}

export default function (url: string, stateman: Stateman, resolve: (state: any) => void) {
  const statemanContent = stateman.get('contact.content');

  if (!statemanContent) {
    axios.get(url)
      .then((resp) => {
        console.log('setState');
        stateman.set('contact.content', resp.data);
        resolve(this.state.content = resp.data.results[0]);
        if (process.env.BROWSER_ENV) {
          m.redraw();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  } else {
    resolve(this.state.content = statemanContent.results[0]);
  }
}
