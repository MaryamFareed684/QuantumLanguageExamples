// Pascal's triangle, Catalan numbers and triangle min-path.
const pas = (n) => { const r = [[1]]; for (let i = 1; i < n; i++) r.push([1, ...r[i - 1].slice(1).map((x, j) => x + r[i - 1][j]), 1]); return r; };
for (const row of pas(6)) console.log(" ".repeat(6 - row.length) + row.join(" "));
const cat = (n) => { const c = [1]; for (let i = 1; i <= n; i++) { c[i] = 0; for (let j = 0; j < i; j++) c[i] += c[j] * c[i - 1 - j]; } return c; }; console.log(cat(15));
const tri = (t) => t.reduceRight((b, r) => r.map((v, i) => v + Math.min(b[i], b[i + 1]))).at(0); console.log(tri([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
const ncr = (n, k) => { const r = [1]; for (let i = 1; i <= n; i++) for (let j = Math.min(i, k); j > 0; j--) r[j] = (r[j] ?? 0) + (r[j - 1] ?? 0); return r[k] ?? 0; }; console.log(ncr(5, 2), ncr(30, 15), ncr(3, 5));
