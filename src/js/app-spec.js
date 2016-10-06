import {App} from './app';
describe('app', () => {
  beforeEach(() => {

  });
  it('init', () => {
    let app = new App('myapp');
    expect(app.val).toBe('myapp');
  });
});
