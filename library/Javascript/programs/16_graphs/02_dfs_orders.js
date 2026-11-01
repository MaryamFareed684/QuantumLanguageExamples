// Depth-first search: pre-order, post-order and edge kinds.
const g = new Map([[1, [2, 3]], [2, [4]], [3, [4]], [4, [1]], [5, [3]]]);
const pre = [], post = [], st = new Map(), kinds = [];
const dfs = (u) => { st.set(u, 1); pre.push(u); for (const v of g.get(u)) { kinds.push(`${u}${v}:${!st.has(v) ? "tree" : st.get(v) === 1 ? "back" : "cross"}`); if (!st.has(v)) dfs(v); } st.set(u, 2); post.push(u); };
for (const u of g.keys()) if (!st.has(u)) dfs(u);
console.log(pre, post, kinds);
