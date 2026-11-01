// Palindromic substrings, subsequences and minimal cuts.
const count = (s) => { let c = 0; const e = (l, r) => { while (l >= 0 && r < s.length && s[l] === s[r]) { c++; l--; r++; } }; for (let i = 0; i < s.length; i++) { e(i, i); e(i, i + 1); } return c; };
const lps = (s) => { const n = s.length, d = Array.from({ length: n }, () => Array(n).fill(0)); for (let i = n - 1; i >= 0; i--) { d[i][i] = 1; for (let j = i + 1; j < n; j++) d[i][j] = s[i] === s[j] ? 2 + (d[i + 1][j - 1] ?? 0) : Math.max(d[i + 1][j], d[i][j - 1]); } return d[0]?.[n - 1] ?? 0; };
const cuts = (s) => { const n = s.length, c = [...Array(n + 1).keys()].map((i) => i - 1); for (let m = 0; m < n; m++) for (const o of [0, 1]) for (let l = m, r = m + o; l >= 0 && r < n && s[l] === s[r]; l--, r++) c[r + 1] = Math.min(c[r + 1], c[l] + 1); return c[n]; };
console.log(count("abc"), count("aaa"), lps("bbbab"), lps("cbbd"), cuts("aab"), cuts("a"), cuts("abcbm"));
