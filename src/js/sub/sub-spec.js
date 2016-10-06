import {Sub} from 'sub/sub';
describe('app', () => {
  beforeEach(() => {

  });
  it('init', () => {
    let sub = new Sub('sub');
    expect(sub.val).toBe('sub');
  });
});
