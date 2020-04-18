const convertToCents = require('../convert-to-cents');

describe('Convert To Cents', () => {
  it('should return the given amount multiplied by 100', () => {
    expect(convertToCents(5)).toBe(500);
  });
});
