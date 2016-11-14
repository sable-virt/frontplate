import './sub/sub';
/**
 * @constructor
 */
export class App {
  constructor(val) {
    this.val = val;
  }
}

let m = new App('main');
if (process.env.NODE_ENV === 'development') {
  console.debug('main value:', m.val);
}
