// Quicksort in place with Hoare partition, and functional style.
function qs(a, l = 0, h = a.length - 1) { if (l >= h) return a; const p = a[(l + h) >> 1]; let i = l, j = h; while (i <= j) { while (a[i] < p) i++; while (a[j] > p) j--; if (i <= j) { [a[i], a[j]] = [a[j], a[i]]; i++; j--; } } qs(a, l, j); qs(a, i, h); return a; }
const f = ([p, ...r]) => (p === undefined ? [] : [...f(r.filter((x) => x < p)), p, ...f(r.filter((x) => x >= p))]);
console.log(qs([3, 6, 1, 8, 2, 9, 2]), f([3, 6, 1, 8, 2, 9, 2]), qs([]), qs([1]));
let s = 5; const big = Array.from({ length: 100000 }, () => (s = (s * 16807) % 2147483647)); qs(big);
console.log(big.every((v, i) => !i || big[i - 1] <= v), big[0], big[50000]);
