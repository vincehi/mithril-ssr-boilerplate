const safeGet = require('lodash/get');
const safeSet = require('lodash/set');

const stateman = {
    state: {},
    init: (initialState) => {
        this.state = JSON.parse(JSON.stringify(initialState)) || {};
    },

    // Safe return values, even if the path does not exist,
    // without throwing an error and providing a default value
    get: field => safeGet(this.state, field, null),

    // Safe set the field with the value provided, even if the path does not exist
    // ie: try to set state.flags.list if state.flags doesn't exist
    set: (field, value) => {
        safeSet(this.state, field, value)
        // return new Promise((resolve) => {
        //     resolve(safeSet(this.state, field, value));
        // });
    },

    // Only needed for server side rendering, do not use client side
    _getString: () => JSON.stringify(this.state)
};

module.exports = stateman;
