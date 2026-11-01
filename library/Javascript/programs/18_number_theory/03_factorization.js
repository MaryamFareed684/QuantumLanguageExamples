// Prime factors, divisors and perfect numbers.
const fac = (n) => { const o = {}; for (let p = 2; p * p <= n; p++) while (n % p === 0) { o[p] = (o[p] || 0) + 1; n /= p; } if (n > 1) o[n] = (o[n] || 0) + 1; return o; };
console.log(fac(360), fac(97), fac(1), fac(1001), fac(600851475143));
const divs = (n) => { const a = [], b = []; for (let i = 1; i * i <= n; i++) if (n % i === 0) { a.push(i); if (i * i !== n) b.unshift(n / i); } return [...a, ...b]; };
console.log(divs(28), divs(36), divs(1));
console.log([...Array(10000).keys()].filter((n) => n > 1 && divs(n).slice(0, -1).reduce((a, b) => a + b, 0) === n));
const am = []; for (let a = 2; a < 3000; a++) { const b = divs(a).slice(0, -1).reduce((x, y) => x + y, 0); if (b > a && divs(b).slice(0, -1).reduce((x, y) => x + y, 0) === a) am.push([a, b]); } console.log(am);
