// Merging intervals, insertion and point queries.
const merge = (a) => [...a].sort((x, y) => x[0] - y[0]).reduce((o, [s, e]) => { const l = o.at(-1); if (l && s <= l[1]) l[1] = Math.max(l[1], e); else o.push([s, e]); return o; }, []);
console.log(merge([[1, 3], [8, 10], [2, 6], [15, 18]]), merge([[1, 4], [4, 5]]), merge([]));
const covers = (m, p) => { let l = 0, h = m.length - 1; while (l <= h) { const k = (l + h) >> 1; if (p < m[k][0]) h = k - 1; else if (p > m[k][1]) l = k + 1; else return true; } return false; };
const m = merge([[1, 3], [5, 7], [9, 9]]); console.log([0, 2, 4, 7, 9, 10].map((p) => covers(m, p)));
