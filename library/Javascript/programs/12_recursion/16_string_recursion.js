// Recursive string tasks: edit distance, palindromes, wildcards.
const memo = new Map();
const ed = (a, b) => { const k = a + "|" + b; if (memo.has(k)) return memo.get(k); const r = !a ? b.length : !b ? a.length : a[0] === b[0] ? ed(a.slice(1), b.slice(1)) : 1 + Math.min(ed(a.slice(1), b), ed(a, b.slice(1)), ed(a.slice(1), b.slice(1))); memo.set(k, r); return r; };
console.log(ed("kitten", "sitting"), ed("", "abc"), ed("flaw", "lawn"));
const wild = (p, s) => !p ? !s : p[0] === "*" ? wild(p.slice(1), s) || (!!s && wild(p, s.slice(1))) : !!s && (p[0] === "?" || p[0] === s[0]) && wild(p.slice(1), s.slice(1));
console.log(wild("a*c", "abbbc"), wild("a?c", "abbc"), wild("*", ""), wild("??", "a"));
const pal = (s) => s.length < 2 || (s[0] === s.at(-1) && pal(s.slice(1, -1)));
console.log(pal("racecar"), pal("ab"), pal(""));
