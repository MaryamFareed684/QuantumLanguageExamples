// Longest path and path counts in a DAG.
const g = { s: { a: 2, b: 3 }, a: { c: 4, d: 1 }, b: { d: 2 }, c: { t: 1 }, d: { t: 5 }, t: {} };
const memoL = {}, longest = (u) => (memoL[u] ??= u === "t" ? 0 : Math.max(...Object.entries(g[u]).map(([v, w]) => w + longest(v))));
const memoC = {}, count = (u) => (memoC[u] ??= u === "t" ? 1 : Object.keys(g[u]).reduce((s, v) => s + count(v), 0));
console.log(longest("s"), count("s"), memoL, memoC);
const crit = (u, p = []) => { const c = [...p, u]; if (u === "t") return c; const [v] = Object.entries(g[u]).reduce((b, e) => (e[1] + longest(e[0]) > b[1] + longest(b[0]) ? e : b)).slice(0, 1); return crit(v, c); }; console.log(crit("s"));
