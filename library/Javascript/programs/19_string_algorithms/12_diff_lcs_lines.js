// A line diff built on LCS.
const a = "the quick\nbrown fox\njumps over\nthe lazy dog".split("\n"), b = "the quick\nred fox\njumps over\nthe very lazy dog\nend".split("\n");
const d = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0)); for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) d[i][j] = a[i] === b[j] ? 1 + d[i + 1][j + 1] : Math.max(d[i + 1][j], d[i][j + 1]);
let i = 0, j = 0; while (i < a.length || j < b.length) { if (a[i] === b[j] && i < a.length) { console.log("  " + a[i]); i++; j++; } else if (j < b.length && (i === a.length || d[i][j + 1] >= d[i + 1][j])) console.log("+ " + b[j++]); else console.log("- " + a[i++]); }
