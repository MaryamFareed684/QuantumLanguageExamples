// Non-adjacent choices: robber, circular and tree variants.
const rob = (a) => a.reduce(([p, c], x) => [c, Math.max(c, p + x)], [0, 0])[1];
const robC = (a) => (a.length === 1 ? a[0] : Math.max(rob(a.slice(1)), rob(a.slice(0, -1))));
const T = (v, l, r) => ({ v, l, r }); const robT = (n) => { if (!n) return [0, 0]; const [a, b] = robT(n.l), [c, d] = robT(n.r); return [n.v + b + d, Math.max(a, b) + Math.max(c, d)]; };
console.log(rob([2, 7, 9, 3, 1]), robC([2, 3, 2]), robC([1, 2, 3, 1]), Math.max(...robT(T(3, T(2, null, T(3)), T(3, null, T(1))))));
const del = (a) => { const c = {}; for (const x of a) c[x] = (c[x] || 0) + x; const m = Math.max(...a); return rob(Array.from({ length: m + 1 }, (_, i) => c[i] || 0)); }; console.log(del([3, 4, 2]), del([2, 2, 3, 3, 3, 4]));
