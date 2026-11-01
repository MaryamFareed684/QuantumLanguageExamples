// Greedy coin change, printed as a receipt.
const coins = [200, 100, 50, 20, 10, 5, 2, 1];
function makeChange(amount) {
  const out = {};
  for (const c of coins) {
    const n = Math.floor(amount / c);
    if (n > 0) { out[c] = n; amount -= n * c; }
  }
  return out;
}
for (const total of [1, 37, 288, 999]) {
  const change = makeChange(total);
  const parts = Object.keys(change).sort((a, b) => b - a).map((c) => `${change[c]} x ${c}`);
  console.log(`${total}: ${parts.join(", ")}`);
}
