const applyMinCap = require('../apply-min-cap');

describe('Apply Min Cap', () => {
  const data = [
    {
      input: {
        commission: 10000,
        threshold: 10,
      },
      output: 10000,
    },

    {
      input: {
        commission: 800,
        threshold: 10,
      },
      output: 1000,
    },
  ];

  it('should not apply minimum threshold when amount does not exceed the given thresold amount', () => {
    const {commission, threshold} = data[0].input;

    expect(applyMinCap(commission, threshold)).toBe(data[0].output);
  });

  it('should apply minimum threshold when amount exceeds the given thresold amount', () => {
    const {commission, threshold} = data[1].input;

    expect(applyMinCap(commission, threshold)).toBe(data[1].output);
  });
});
