import { AnyToStringPipe } from './any-to-string.pipe';

describe('AnyToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new AnyToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
