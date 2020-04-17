const applyMaxCap = require('../apply-max-cap');

describe('Apply Max Cap', () => {
  const data = [
    {
      input: {
        commission: 100,
        threshold: 10,
      },
      output: 10,
    },

    {
      input: {
        commission: 8,
        threshold: 10,
      },
      output: 8,
    },
  ];

  it('should apply maximum threshold when amount exceeds the given thresold amount', () => {
    const {commission, threshold} = data[0].input;

    expect(applyMaxCap(commission, threshold)).toBe(data[0].output);
  });

  it('should not apply maximum threshold when amount does not exceed the given thresold amount', () => {
    const {commission, threshold} = data[1].input;

    expect(applyMaxCap(commission, threshold)).toBe(data[1].output);
  });
});
