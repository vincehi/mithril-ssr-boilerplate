"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var set_1 = __importDefault(require("lodash/set"));
var stateman = {
    state: {},
    init: function (initialState) {
        stateman.state = JSON.parse(JSON.stringify(initialState)) || {};
    },
    get: function (field) { return get_1.default(stateman.state, field, null); },
    set: function (field, value) { return set_1.default(stateman.state, field, value); },
    getString: function () { return JSON.stringify(stateman.state); }
};
exports.default = stateman;
//# sourceMappingURL=stateman.jsx.map