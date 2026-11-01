// Matrices as nested arrays: multiply, transpose, identity, determinant.
const A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]];
const mul = (x, y) => x.map((r) => y[0].map((_, j) => r.reduce((s, v, k) => s + v * y[k][j], 0)));
const transpose = (m) => m[0].map((_, i) => m.map((r) => r[i]));
const identity = (n) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => +(i === j)));
function det(m) {
  if (m.length === 1) return m[0][0];
  return m[0].reduce((s, v, j) => s + (j % 2 ? -1 : 1) * v * det(m.slice(1).map((r) => r.filter((_, c) => c !== j))), 0);
}
console.log(mul(A, B), transpose([[1, 2, 3], [4, 5, 6]]), identity(3));
console.log(det(A), det([[2, 0, 1], [1, 3, 2], [1, 1, 4]]));
for (const row of mul(identity(2), A)) console.log(row.join(" "));
