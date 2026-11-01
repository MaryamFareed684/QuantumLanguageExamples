// Weighted interval scheduling and task assignment.
const J = [[1, 3, 50], [3, 5, 20], [6, 19, 100], [2, 100, 200]];
const wis = (j) => { const s = [...j].sort((a, b) => a[1] - b[1]), d = [0]; s.forEach(([st, , w], i) => { let l = 0, h = i; while (l < h) { const m = (l + h) >> 1; s[m][1] <= st ? (l = m + 1) : (h = m); } d[i + 1] = Math.max(d[i], d[l] + w); }); return d.at(-1); }; console.log(wis(J), wis([[1, 2, 5], [2, 3, 6], [3, 4, 5]]));
const cooldown = (t, n) => { const c = {}; for (const x of t) c[x] = (c[x] || 0) + 1; const v = Object.values(c), m = Math.max(...v), k = v.filter((x) => x === m).length; return Math.max(t.length, (m - 1) * (n + 1) + k); }; console.log(cooldown([..."AAABBB"], 2), cooldown([..."AAABBB"], 0));
const paint = (c) => c.reduce((d, r) => [r[0] + Math.min(d[1], d[2]), r[1] + Math.min(d[0], d[2]), r[2] + Math.min(d[0], d[1])], [0, 0, 0]); console.log(Math.min(...paint([[17, 2, 17], [16, 16, 5], [14, 3, 19]])));
