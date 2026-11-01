// A prime sieve on Uint8Array and bit tricks.
const n = 2000000; const s = new Uint8Array(n + 1);
let c = 0, last = 0;
for (let i = 2; i <= n; i++) { if (!s[i]) { c++; last = i; for (let j = i * i; j <= n; j += i) s[j] = 1; } }
console.log(c, last);
const bits = new Uint32Array(4);
const setBit = (i) => (bits[i >>> 5] |= 1 << (i & 31)), getBit = (i) => (bits[i >>> 5] >>> (i & 31)) & 1;
[1, 33, 64, 127].forEach(setBit);
console.log(bits, getBit(33), getBit(34), getBit(127));
