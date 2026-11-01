// Serializing a binary tree and rebuilding it.
const ser = (n) => (n ? [n.v, ...ser(n.l), ...ser(n.r)] : ["#"]);
const de = (a, i = { p: 0 }) => { const v = a[i.p++]; if (v === "#") return null; const l = de(a, i), r = de(a, i); return { v, l, r }; };
const t = { v: 1, l: { v: 2, l: null, r: null }, r: { v: 3, l: { v: 4, l: null, r: null }, r: null } };
const s = ser(t); console.log(s.join(","), JSON.stringify(de(s)) === JSON.stringify(t), de(["#"]), JSON.stringify(t));
const lvl = (n) => { const o = []; let q = n ? [n] : []; while (q.length) { o.push(q.map((x) => x.v)); q = q.flatMap((x) => [x.l, x.r].filter(Boolean)); } return o; }; console.log(lvl(t), lvl(null));
