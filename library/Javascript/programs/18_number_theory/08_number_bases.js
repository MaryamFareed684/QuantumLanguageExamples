// Base conversion with BigInt and balanced ternary.
const toB = (n, b) => { if (n === 0n) return "0"; let o = ""; while (n > 0n) { o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Number(n % b)] + o; n /= b; } return o; };
const fromB = (s, b) => [...s].reduce((v, c) => v * b + BigInt(parseInt(c, 36)), 0n);
console.log(toB(255n, 16n), toB(2n ** 70n, 36n), fromB("ZZ", 36n), fromB(toB(10n ** 25n, 7n), 7n), 2n ** 70n === fromB(toB(2n ** 70n, 36n), 36n));
const bal = (n) => { if (!n) return "0"; let o = ""; while (n) { const r = ((n % 3) + 3) % 3; o = "0+-"[r] + o; n = (n - (r === 2 ? -1 : r)) / 3; } return o; }; console.log(bal(8), bal(-5), bal(42));
const zeck = (n) => { const f = [1, 2]; while (f.at(-1) <= n) f.push(f.at(-1) + f.at(-2)); const o = []; for (let i = f.length - 1; i >= 0; i--) if (f[i] <= n) { o.push(f[i]); n -= f[i]; } return o; }; console.log(zeck(100), zeck(1000));
