// Recursive binary search and merge of sorted lists.
const bs = (a, t, l = 0, h = a.length - 1) => { if (l > h) return -1; const m = (l + h) >> 1; return a[m] === t ? m : a[m] < t ? bs(a, t, m + 1, h) : bs(a, t, l, m - 1); };
const a = [1, 3, 5, 7, 9, 11];
console.log(a.map((x) => bs(a, x)), bs(a, 4), bs([], 1));
const merge = ([x, ...xs], [y, ...ys]) => (x === undefined ? (y === undefined ? [] : [y, ...ys]) : y === undefined ? [x, ...xs] : x < y ? [x, ...merge(xs, [y, ...ys])] : [y, ...merge([x, ...xs], ys)]);
console.log(merge([1, 4, 6], [2, 3, 7, 8]));
