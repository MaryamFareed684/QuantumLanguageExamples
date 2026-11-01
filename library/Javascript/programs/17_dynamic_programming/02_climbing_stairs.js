// Counting ways: stairs, tilings and decoding messages.
const stairs = (n, s = [1, 2]) => { const w = [1]; for (let i = 1; i <= n; i++) w[i] = s.reduce((t, k) => t + (w[i - k] ?? 0), 0); return w[n]; };
console.log(stairs(5), stairs(10), stairs(10, [1, 2, 3]), stairs(30));
const tile = (n) => { const d = [1, 1]; for (let i = 2; i <= n; i++) d[i] = d[i - 1] + d[i - 2]; return d[n]; }; console.log(tile(4), tile(12));
const dec = (s) => { const d = [1, s[0] === "0" ? 0 : 1]; for (let i = 2; i <= s.length; i++) d[i] = (s[i - 1] !== "0" ? d[i - 1] : 0) + (+s.slice(i - 2, i) >= 10 && +s.slice(i - 2, i) <= 26 ? d[i - 2] : 0); return d[s.length]; }; console.log(dec("12"), dec("226"), dec("06"), dec("11106"));
