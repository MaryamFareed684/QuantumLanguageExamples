// Longest common subsequence and edit distance with traceback.
const lcs = (a, b) => { const d = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0)); for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = a[i - 1] === b[j - 1] ? d[i - 1][j - 1] + 1 : Math.max(d[i - 1][j], d[i][j - 1]); let o = "", i = a.length, j = b.length; while (i && j) { if (a[i - 1] === b[j - 1]) { o = a[i - 1] + o; i--; j--; } else d[i - 1][j] >= d[i][j - 1] ? i-- : j--; } return o; };
console.log(lcs("AGGTAB", "GXTXAYB"), lcs("abc", "xyz") === "", lcs("abcdef", "acf"));
const ed = (a, b) => { let p = [...Array(b.length + 1).keys()]; for (let i = 1; i <= a.length; i++) { const c = [i]; for (let j = 1; j <= b.length; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] !== b[j - 1])); p = c; } return p[b.length]; };
console.log(ed("kitten", "sitting"), ed("", "abc"), ed("abc", "abc"), ed("intention", "execution"));
