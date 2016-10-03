/**
 * @constructor
 */
class Main {
  constructor(val) {
    this.val = val;
  }
}

let m = new Main('main');
assert(m.val === 'main', `Init val match`);
assert(m.val === 'sub', `Init val unmatch`);
