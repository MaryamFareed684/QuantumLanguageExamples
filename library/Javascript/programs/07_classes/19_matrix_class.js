// A Matrix class with immutable operations and printing.
class Matrix {
  constructor(r) { this.r = r; }
  static id(n) { return new Matrix(Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)))); }
  times(o) { return new Matrix(this.r.map((row) => o.r[0].map((_, j) => row.reduce((s, v, k) => s + v * o.r[k][j], 0)))); }
  pow(n) { let res = Matrix.id(this.r.length), b = this; while (n) { if (n & 1) res = res.times(b); b = b.times(b); n >>= 1; } return res; }
  toString() { return this.r.map((x) => x.join(" ")).join("\n"); }
}
console.log(String(new Matrix([[1, 1], [1, 0]]).pow(10)));
console.log(new Matrix([[1, 2], [3, 4]]).times(Matrix.id(2)), new Matrix([[1, 1], [1, 0]]).pow(70).r[0][1]);
