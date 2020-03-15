import safeGet from 'lodash/get';
import safeSet from 'lodash/set';

const stateman = {
  state: {},
  init: (initialState) => {
    stateman.state = JSON.parse(JSON.stringify(initialState)) || {};
  },

  get: (field) => safeGet(stateman.state, field, null),

  set: (field, value) => safeSet(stateman.state, field, value),

  getString: () => JSON.stringify(stateman.state)
};

export default stateman;
