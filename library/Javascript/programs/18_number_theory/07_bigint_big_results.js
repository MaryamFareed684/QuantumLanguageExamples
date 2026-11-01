// Big factorials, Fibonacci and digit sums with BigInt.
const fact = (n) => { let r = 1n; for (let i = 2n; i <= n; i++) r *= i; return r; };
console.log(fact(25n), String(fact(100n)).length, [...String(fact(100n))].reduce((a, b) => a + +b, 0));
let a = 0n, b = 1n, i = 0; while (String(a).length < 100) { [a, b] = [b, a + b]; i++; } console.log(i, a);
console.log([...String(2n ** 1000n)].reduce((s, d) => s + +d, 0), 2n ** 64n - 1n, (10n ** 30n + 1n) % 7n, BigInt(Number.MAX_SAFE_INTEGER) + 2n);
const isqrt = (n) => { let x = n, y = (x + 1n) / 2n; while (y < x) { x = y; y = (x + n / x) / 2n; } return x; }; console.log(isqrt(10n ** 40n), isqrt(2n * 10n ** 60n));
const gcdB = (x, y) => (y ? gcdB(y, x % y) : x); console.log(gcdB(fact(20n), 2n ** 70n), (-7n).toString(), (255n).toString(2), BigInt("123456789012345678901234567890") * 2n);
