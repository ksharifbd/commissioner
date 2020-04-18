const centCeil = require('..');

describe('Cent Ceil', () => {
  const data = [
    {
      input: 87,
      output: '87.00',
    },

    {
      input: 0.06,
      output: '0.06',
    },

    {
      input: 0.3,
      output: '0.30',
    },

    {
      input: 0.023,
      output: '0.03',
    },
  ];

  data.forEach(datum => {
    it(`should return ${datum.output} for the input ${datum.input}`, () => {
      expect(centCeil(datum.input)).toBe(datum.output);
    });
  });
});
