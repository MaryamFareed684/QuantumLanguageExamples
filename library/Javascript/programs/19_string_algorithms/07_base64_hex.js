// Base64 and hex by hand, checked against Buffer.
const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const b64 = (s) => { const b = [...Buffer.from(s)]; let o = ""; for (let i = 0; i < b.length; i += 3) { const n = (b[i] << 16) | ((b[i + 1] ?? 0) << 8) | (b[i + 2] ?? 0); o += A[(n >> 18) & 63] + A[(n >> 12) & 63] + (i + 1 < b.length ? A[(n >> 6) & 63] : "=") + (i + 2 < b.length ? A[n & 63] : "="); } return o; };
const un = (s) => { const out = []; for (let i = 0; i < s.length; i += 4) { const v = [...s.slice(i, i + 4)].map((c) => (c === "=" ? 0 : A.indexOf(c))); const n = (v[0] << 18) | (v[1] << 12) | (v[2] << 6) | v[3]; out.push((n >> 16) & 255); if (s[i + 2] !== "=") out.push((n >> 8) & 255); if (s[i + 3] !== "=") out.push(n & 255); } return Buffer.from(out).toString(); };
for (const t of ["", "f", "fo", "foo", "foobar", "héllo"]) console.log(JSON.stringify(t), b64(t), b64(t) === Buffer.from(t).toString("base64"), un(b64(t)) === t);
