export default class Stateman {
  private _state: object;

  constructor(initialState: object) {
    this._state = {};
    this.init(initialState);
  }

  init(initialState: object = {}) {
    this._state = { ...initialState };
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }
}
