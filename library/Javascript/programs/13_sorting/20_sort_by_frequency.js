// Sort by frequency, by custom alphabets and by computed rank.
const byFreq = (a) => { const c = new Map(); a.forEach((x) => c.set(x, (c.get(x) || 0) + 1)); return [...a].sort((x, y) => c.get(y) - c.get(x) || (x > y ? 1 : -1)); };
console.log(byFreq([4, 6, 2, 2, 6, 4, 4, 4]), byFreq([..."tree"]).join(""));
const alpha = (ord) => { const r = Object.fromEntries([...ord].map((c, i) => [c, i])); return (x, y) => { for (let i = 0; i < Math.min(x.length, y.length); i++) if (x[i] !== y[i]) return r[x[i]] - r[y[i]]; return x.length - y.length; }; };
console.log(["bca", "aaa", "acb"].sort(alpha("zyxwvutsrqponmlkjihgfedcba")), ["hello", "leetcode"].sort(alpha("hlabcdefgijkmnopqrstuvwxyz")));
const ranks = (a) => { const s = [...new Set(a)].sort((x, y) => x - y); return a.map((x) => s.indexOf(x) + 1); }; console.log(ranks([40, 10, 20, 40, 30]));
