import safeSet from 'lodash/set';
import safeGet from 'lodash/get';

const stateman = {
  state: {},
  init: (initialState: object): void => {
    stateman.state = JSON.parse(JSON.stringify(initialState)) || {};
  },

  get: (field: string): void => safeGet(stateman.state, field, null),

  set: (field: string, value: object) => safeSet(stateman.state, field, value),

  getString: () => JSON.stringify(stateman.state),
};

export default stateman;
