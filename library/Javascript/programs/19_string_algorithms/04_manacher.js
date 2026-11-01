// Manacher's algorithm for longest palindromic substring.
function man(s) { const t = "^#" + [...s].join("#") + "#$", p = Array(t.length).fill(0); let c = 0, r = 0; for (let i = 1; i < t.length - 1; i++) { if (i < r) p[i] = Math.min(r - i, p[2 * c - i]); while (t[i + p[i] + 1] === t[i - p[i] - 1]) p[i]++; if (i + p[i] > r) { c = i; r = i + p[i]; } } const m = Math.max(...p), k = p.indexOf(m); return s.slice((k - m - 1) / 2, (k - m - 1) / 2 + m); }
console.log(man("babad"), man("cbbd"), man("a"), man("forgeeksskeegfor"), man("abacaba"), man("abcde"));
const cnt = (s) => { let c = 0; for (let i = 0; i < 2 * s.length - 1; i++) { let l = i >> 1, r = l + (i & 1); while (l >= 0 && s[l] === s[r]) { c++; l--; r++; } } return c; }; console.log(cnt("aaa"), cnt("abcba"));
