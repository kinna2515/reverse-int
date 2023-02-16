module.exports = function reverse (n) {
  const revNum = (parseFloat(n.toString().split('').reverse().join('')));
  return Math.abs(revNum);
}
