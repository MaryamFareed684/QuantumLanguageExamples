// Factorials and Fibonacci in Number and BigInt.
let f = 1;
for (let i = 1; i <= 25; i++) { f *= i; if (i % 5 === 0) console.log(i, f); }
const fib = [0, 1];
while (fib.length < 80) fib.push(fib.at(-1) + fib.at(-2));
console.log(fib.slice(0, 12), fib[78], fib[79]);
let a = 0n, b = 1n;
for (let i = 0; i < 150; i++) [a, b] = [b, a + b];
console.log(a);
console.log([...Array(170).keys()].reduce((p, i) => p * (i + 1), 1), [...Array(171).keys()].reduce((p, i) => p * (i + 1), 1));
