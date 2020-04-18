function centCeil(number) {
  return (Math.ceil(number * 100) / 100).toFixed(2);
}

module.exports = centCeil;
