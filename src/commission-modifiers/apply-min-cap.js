function applyMinCap(commission, threshold) {
  return commission < threshold ? threshold : commission;
}

module.exports = applyMinCap;
