// Substring search: naive and KMP.
const naive = (s, p) => { const o = []; for (let i = 0; i + p.length <= s.length; i++) { let j = 0; while (j < p.length && s[i + j] === p[j]) j++; if (j === p.length) o.push(i); } return o; };
const fail = (p) => { const f = [0]; for (let i = 1, k = 0; i < p.length; i++) { while (k && p[i] !== p[k]) k = f[k - 1]; if (p[i] === p[k]) k++; f[i] = k; } return f; };
const kmp = (s, p) => { const f = fail(p), o = []; for (let i = 0, k = 0; i < s.length; i++) { while (k && s[i] !== p[k]) k = f[k - 1]; if (s[i] === p[k]) k++; if (k === p.length) { o.push(i - k + 1); k = f[k - 1]; } } return o; };
console.log(naive("abababa", "aba"), kmp("abababa", "aba"), fail("abcabd"), kmp("hello", "z"), kmp("aaaa", "aa"));
