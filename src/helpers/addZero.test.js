import addZero from './addZero';

describe('testing addZero function', () => {
  it('retun "05" with argument 5', () => {
    expect(addZero(5)).toBe('05');
  });

  it('return string', () => {
    const result = addZero(0);
    const type = typeof result;
    expect(type).toBe('string');
  });

  it('return "00" if no arguments', () => {
    expect(addZero()).toBe('00');
  });
});
