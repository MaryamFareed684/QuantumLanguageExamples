// Huffman coding: build, encode, decode.
function huff(t) { const f = {}; for (const c of t) f[c] = (f[c] || 0) + 1; let q = Object.entries(f).map(([c, n]) => ({ c, n })); while (q.length > 1) { q.sort((a, b) => a.n - b.n || (a.c ?? "~").localeCompare(b.c ?? "~")); const [l, r] = q.splice(0, 2); q.push({ n: l.n + r.n, l, r }); } const m = {}; const w = (x, p) => { if (x.c !== undefined) m[x.c] = p || "0"; else { w(x.l, p + "0"); w(x.r, p + "1"); } }; w(q[0], ""); return { root: q[0], m }; }
const { root, m } = huff("abracadabra"); console.log(m);
const enc = [..."abracadabra"].map((c) => m[c]).join(""); console.log(enc, enc.length, "abracadabra".length * 8);
const dec = (b) => { let o = "", n = root; for (const x of b) { n = x === "0" ? n.l : n.r; if (n.c !== undefined) { o += n.c; n = root; } } return o; }; console.log(dec(enc));
