// Newton's method, bisection, Simpson's rule and Euler steps.
const newton = (f, df, x, n = 20) => { for (let i = 0; i < n; i++) x -= f(x) / df(x); return x; };
console.log(newton((x) => x * x - 2, (x) => 2 * x, 1), newton((x) => x ** 3 - x - 2, (x) => 3 * x * x - 1, 1.5));
function bisect(f, a, b) { for (let i = 0; i < 60; i++) { const m = (a + b) / 2; f(a) * f(m) <= 0 ? (b = m) : (a = m); } return (a + b) / 2; }
console.log(bisect(Math.cos, 0, 3));
function simpson(f, a, b, n = 100) { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; }
console.log(simpson(Math.sin, 0, Math.PI), simpson((x) => x * x, 0, 3));
let y = 1; for (let i = 0; i < 1000; i++) y += y * 0.001; console.log(y);
