// Searching rotated arrays and finding pivots.
function search(a, t) { let l = 0, h = a.length - 1; while (l <= h) { const m = (l + h) >> 1; if (a[m] === t) return m; if (a[l] <= a[m]) { if (a[l] <= t && t < a[m]) h = m - 1; else l = m + 1; } else { if (a[m] < t && t <= a[h]) l = m + 1; else h = m - 1; } } return -1; }
const a = [4, 5, 6, 7, 0, 1, 2];
console.log(a.map((x) => search(a, x)), search(a, 3), search([], 1));
const pivot = (x) => { let l = 0, h = x.length - 1; while (l < h) { const m = (l + h) >> 1; x[m] > x[h] ? (l = m + 1) : (h = m); } return l; }; console.log(pivot(a), pivot([1, 2, 3]), pivot([2, 1]));
