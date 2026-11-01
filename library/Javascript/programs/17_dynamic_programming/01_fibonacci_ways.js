// Fibonacci four ways: memo, table, constant space and matrix.
const memo = new Map([[0, 0], [1, 1]]);
const m = (n) => memo.get(n) ?? (memo.set(n, m(n - 1) + m(n - 2)), memo.get(n));
const t = (n) => { const f = [0, 1]; for (let i = 2; i <= n; i++) f[i] = f[i - 1] + f[i - 2]; return f[n]; };
const c = (n) => { let a = 0, b = 1; while (n--) [a, b] = [b, a + b]; return a; };
const mat = (n) => { let r = [1, 0, 0, 1], b = [1, 1, 1, 0]; const x = (p, q) => [p[0] * q[0] + p[1] * q[2], p[0] * q[1] + p[1] * q[3], p[2] * q[0] + p[3] * q[2], p[2] * q[1] + p[3] * q[3]]; for (; n; n >>= 1) { if (n & 1) r = x(r, b); b = x(b, b); } return r[1]; };
console.log([m, t, c, mat].map((f) => f(50)), [m, t, c, mat].map((f) => f(1)), c(78));
