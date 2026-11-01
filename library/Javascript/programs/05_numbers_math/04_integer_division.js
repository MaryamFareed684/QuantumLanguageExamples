// Integer division, modulo signs and 32-bit operators.
for (const [a, b] of [[7, 3], [-7, 3], [7, -3], [-7, -3]]) {
  const mod = ((a % b) + b) % b;
  console.log(a, b, a % b, mod, Math.trunc(a / b), Math.floor(a / b));
}
console.log(5.5 % 2, -5.5 % 2, 5 % 0, 0 % 5, Infinity % 2, 2 % Infinity);
console.log(2147483647 + 1, 2147483647 | 0, 2147483648 | 0, 4294967296 | 0, 1e10 | 0, -1 >>> 0, 1.9 | 0, -1.9 | 0, ~~-5.7, NaN | 0);
console.log(0xff & 0x0f, 1 << 30, 1 << 31, 3 >> 1, -3 >> 1, -3 >>> 30);
