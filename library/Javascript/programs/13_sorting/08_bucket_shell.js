// Bucket sort for fractions and Shell sort with gaps.
const bucket = (a, n = 5) => { const b = Array.from({ length: n }, () => []); for (const x of a) b[Math.floor(x * n)].push(x); return b.flatMap((v) => v.sort((p, q) => p - q)); };
console.log(bucket([0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51]));
function shell(a) { for (let g = a.length >> 1; g > 0; g >>= 1) for (let i = g; i < a.length; i++) { const v = a[i]; let j = i; while (j >= g && a[j - g] > v) { a[j] = a[j - g]; j -= g; } a[j] = v; } return a; }
console.log(shell([12, 34, 54, 2, 3, 9, 1]));
