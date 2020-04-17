function applyMaxCap(commission, threshold) {
  return commission > threshold ? threshold : commission;
}

module.exports = applyMaxCap;
