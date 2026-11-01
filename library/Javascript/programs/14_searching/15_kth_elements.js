// K-th of two sorted arrays and median of streams.
const kth = (a, b, k) => { let i = 0, j = 0, v; while (k--) v = j >= b.length || (i < a.length && a[i] <= b[j]) ? a[i++] : b[j++]; return v; };
console.log(kth([1, 3, 5], [2, 4, 6], 4), kth([1], [], 1), kth([], [7, 8], 2));
const med = (a, b) => { const n = a.length + b.length; return n % 2 ? kth(a, b, (n + 1) / 2) : (kth(a, b, n / 2) + kth(a, b, n / 2 + 1)) / 2; }; console.log(med([1, 3], [2]), med([1, 2], [3, 4]));
const stream = []; const add = (x) => { let i = stream.findIndex((y) => y > x); i < 0 ? stream.push(x) : stream.splice(i, 0, x); const n = stream.length; return n % 2 ? stream[n >> 1] : (stream[n / 2 - 1] + stream[n / 2]) / 2; }; console.log([5, 15, 1, 3].map(add));
