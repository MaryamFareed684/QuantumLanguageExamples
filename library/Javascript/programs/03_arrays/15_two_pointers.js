// Two-pointer techniques: pair sum, dedupe, container with water.
function pairSum(a, t) {
  let l = 0, r = a.length - 1;
  while (l < r) {
    const s = a[l] + a[r];
    if (s === t) return [a[l], a[r]];
    s < t ? l++ : r--;
  }
  return null;
}
console.log(pairSum([1, 3, 4, 6, 8, 11], 10), pairSum([1, 2], 9));
function dedupe(a) {
  let w = 0;
  for (let i = 0; i < a.length; i++) if (i === 0 || a[i] !== a[i - 1]) a[w++] = a[i];
  a.length = w;
  return a;
}
console.log(dedupe([1, 1, 2, 2, 2, 3]));
function water(h) {
  let l = 0, r = h.length - 1, best = 0;
  while (l < r) { best = Math.max(best, Math.min(h[l], h[r]) * (r - l)); h[l] < h[r] ? l++ : r--; }
  return best;
}
console.log(water([1, 8, 6, 2, 5, 4, 8, 3, 7]));
