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
  that: object,
  url: string,
  objectKey: string,
  resolve: (state: object) => void,
): void {
  const statemanContent = that.stateman();

  if (!statemanContent.contact) {
    axios.get(url)
      .then((resp) => {
        that.stateman({contact: resp.data});
        if (process.env.BROWSER_ENV) {
          m.redraw();
        }
        that.content = resp.data.results[0];
        return resolve(that.content);
      })
      .catch((error) => {
        console.log(error);
        return;
      })
      .then(() => {
        // always executed
      });
  } else {
    that.content = statemanContent.contact.results[0];
    resolve(that.content);
  }
}
