// Longest consecutive runs and unique windows.
const lcs = (a) => { const s = new Set(a); let b = 0; for (const x of s) if (!s.has(x - 1)) { let n = 1; while (s.has(x + n)) n++; b = Math.max(b, n); } return b; };
console.log(lcs([100, 4, 200, 1, 3, 2]), lcs([]), lcs([1, 1]));
const uniq = (s) => { const l = new Map(); let st = 0, b = 0; [...s].forEach((c, i) => { if (l.get(c) >= st) st = l.get(c) + 1; l.set(c, i); b = Math.max(b, i - st + 1); }); return b; };
console.log(uniq("abcabcbb"), uniq("bbbbb"), uniq("pwwkew"), uniq(""));
const minWin = (s, t) => { const n = {}; for (const c of t) n[c] = (n[c] || 0) + 1; let m = t.length, l = 0, b = ""; for (let r = 0; r < s.length; r++) { if (n[s[r]]-- > 0) m--; while (!m) { if (!b || r - l + 1 < b.length) b = s.slice(l, r + 1); if (++n[s[l++]] > 0) m++; } } return b; }; console.log(minWin("ADOBECODEBANC", "ABC"), minWin("a", "b") === "");
