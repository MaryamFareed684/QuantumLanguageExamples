// Chinese remainder theorem and linear congruences.
const ext = (a, b) => (b === 0n ? [a, 1n, 0n] : ((r) => [r[0], r[2], r[1] - (a / b) * r[2]])(ext(b, a % b)));
const crt = (rs, ms) => { const M = ms.reduce((a, b) => a * b, 1n); let x = 0n; rs.forEach((r, i) => { const m = M / ms[i], [, t] = ext(m, ms[i]); x += r * m * t; }); return ((x % M) + M) % M; };
console.log(crt([2n, 3n, 2n], [3n, 5n, 7n]), crt([1n, 2n, 3n], [5n, 7n, 11n]), crt([0n, 0n], [4n, 9n]));
const solve = (a, b, m) => { const o = []; for (let x = 0; x < m; x++) if ((a * x - b) % m === 0) o.push(x); return o; }; console.log(solve(3, 1, 7), solve(2, 1, 4), solve(2, 2, 4));
