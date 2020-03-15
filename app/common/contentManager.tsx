import { get } from 'axios';
import m from '../../lib/m';

// const port = process.env.PORT || 5000;
// const localUrl = 'http://' + (process.browser ? window.location.host : '127.0.0.1:' + port);
// const localData = localUrl + '/docs';

export default function (url, stateman, resolve) {
  const statemanContent = stateman.get('contact.content');

  if (!statemanContent) {
    get(url)
      .then((resp) => {
        stateman.set('contact.content', resp.data);
        resolve(this.content = resp.data.results[0]);
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
    resolve(this.content = statemanContent.results[0]);
  }
}
