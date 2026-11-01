// Zigzag conversion, number spelling and string compression.
const zig = (s, n) => { if (n < 2) return s; const r = Array(n).fill(""); let i = 0, d = 1; for (const c of s) { r[i] += c; if (i === 0) d = 1; else if (i === n - 1) d = -1; i += d; } return r.join(""); }; console.log(zig("PAYPALISHIRING", 3), zig("PAYPALISHIRING", 4), zig("A", 1));
const comp = (s) => { const r = s.replace(/(.)\1*/g, (m, c) => c + m.length); return r.length < s.length ? r : s; }; console.log(comp("aabcccccaaa"), comp("abc"));
const col = (n) => { let o = ""; while (n) { n--; o = String.fromCharCode(65 + (n % 26)) + o; n = Math.floor(n / 26); } return o; }, un = (s) => [...s].reduce((v, c) => v * 26 + c.charCodeAt(0) - 64, 0); console.log(col(1), col(28), col(701), un("AB"), un("ZY"));
