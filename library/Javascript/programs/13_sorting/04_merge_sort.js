// Merge sort, counting inversions.
function ms(a) { if (a.length < 2) return [a, 0]; const m = a.length >> 1, [l, x] = ms(a.slice(0, m)), [r, y] = ms(a.slice(m)); const o = []; let i = 0, j = 0, inv = x + y; while (i < l.length && j < r.length) { if (l[i] <= r[j]) o.push(l[i++]); else { o.push(r[j++]); inv += l.length - i; } } return [[...o, ...l.slice(i), ...r.slice(j)], inv]; }
console.log(ms([5, 2, 4, 1, 3]), ms([1, 2, 3])[1], ms([3, 2, 1])[1], ms([])[0]);
let s = 11; const big = Array.from({ length: 50000 }, () => (s = (s * 48271) % 2147483647) % 1000);
const [sorted, inv] = ms(big); console.log(sorted.slice(0, 5), sorted.slice(-3), inv);
