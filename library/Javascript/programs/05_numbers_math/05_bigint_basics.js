// BigInt arithmetic, conversion and comparison.
const big = 2n ** 100n;
console.log(big, big + 1n, big * big, big / 3n, big % 7n, -big, typeof big, big.toString(16));
console.log(7n / 2n, -7n / 2n, -7n % 3n, 5n == 5, 5n === 5, 2n > 1, 1 < 2n, [3n, 1, 2n].sort());
console.log(BigInt(123), BigInt("0xff"), BigInt.asUintN(8, 257n), BigInt.asIntN(8, 255n), Number(2n ** 53n), parseInt("12n"), 0n ? "t" : "f");
try { 1n + 1; } catch (e) { console.log(e.name + ": " + e.message); }
try { BigInt(1.5); } catch (e) { console.log(e.name); }
const fact = (n) => (n < 2n ? 1n : n * fact(n - 1n));
console.log(fact(30n), String(fact(25n)).length, 1n << 70n, 255n & 15n, (2n ** 64n).toLocaleString === undefined);
