// Prefix sums, Kadane's maximum subarray and sliding window.
const a = [3, -1, 4, -1, 5, -9, 2, 6];
const prefix = a.reduce((p, x) => (p.push(p[p.length - 1] + x), p), [0]);
console.log(prefix, prefix[5] - prefix[2]);
let best = -Infinity, cur = 0, s = 0, from = 0, to = 0;
a.forEach((x, i) => {
  if (cur <= 0) { cur = x; s = i; } else cur += x;
  if (cur > best) { best = cur; from = s; to = i; }
});
console.log(best, a.slice(from, to + 1));
let win = 0, maxWin = -Infinity;
for (let i = 0; i < a.length; i++) { win += a[i]; if (i >= 3) win -= a[i - 3]; if (i >= 2) maxWin = Math.max(maxWin, win); }
console.log(maxWin);
