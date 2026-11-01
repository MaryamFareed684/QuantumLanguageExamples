// Suffix arrays, LCP and longest repeated substring.
const sa = (s) => [...s].map((_, i) => i).sort((a, b) => (s.slice(a) < s.slice(b) ? -1 : 1));
const lcp = (s, a) => { const r = []; a.forEach((v, i) => { r[v] = i; }); const o = Array(s.length).fill(0); let h = 0; for (let i = 0; i < s.length; i++) { if (r[i]) { const j = a[r[i] - 1]; while (s[i + h] === s[j + h] && i + h < s.length) h++; o[r[i]] = h; if (h) h--; } else h = 0; } return o; };
const s = "banana", a = sa(s); console.log(a, a.map((i) => s.slice(i)), lcp(s, a));
const lrs = (t) => { const x = sa(t), l = lcp(t, x), m = Math.max(0, ...l); return t.slice(x[l.indexOf(m)], x[l.indexOf(m)] + m); }; console.log(lrs("banana"), lrs("abcabcabc"), lrs("abc") === "");
const distinct = (t) => { const x = sa(t); return (t.length * (t.length + 1)) / 2 - lcp(t, x).reduce((p, q) => p + q, 0); }; console.log(distinct("aaa"), distinct("abc"), distinct("banana"));
