const ceil = require('..');

describe('Ceil', () => {
  const data = [
    {
      input: 8700,
      output: '87.00',
    },

    {
      input: 6,
      output: '0.06',
    },

    {
      input: 30,
      output: '0.30',
    },

    {
      input: 2.3,
      output: '0.03',
    },
  ];

  data.forEach(datum => {
    it(`should return ${datum.output} for the input ${datum.input}`, () => {
      expect(ceil(datum.input)).toBe(datum.output);
    });
  });
});
