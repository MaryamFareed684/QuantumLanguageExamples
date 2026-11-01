// Connected components, bridges and articulation points.
const g = { 0: [1, 2], 1: [0, 2], 2: [0, 1, 3], 3: [2, 4, 5], 4: [3, 5], 5: [3, 4], 6: [7], 7: [6] };
const comps = (g) => { const s = new Set(), o = []; for (const u in g) if (!s.has(u)) { const c = [], st = [u]; s.add(u); while (st.length) { const x = st.pop(); c.push(+x); for (const v of g[x]) if (!s.has(String(v))) { s.add(String(v)); st.push(v); } } o.push(c.sort()); } return o; }; console.log(comps(g));
let t = 0; const tin = {}, low = {}, br = [], ap = new Set();
const go = (u, p) => { tin[u] = low[u] = t++; let ch = 0; for (const v of g[u]) { if (v === p) continue; if (tin[v] !== undefined) low[u] = Math.min(low[u], tin[v]); else { go(v, u); ch++; low[u] = Math.min(low[u], low[v]); if (low[v] > tin[u]) br.push([u, v]); if (p !== -1 && low[v] >= tin[u]) ap.add(u); } } if (p === -1 && ch > 1) ap.add(u); };
Object.keys(g).map(Number).forEach((u) => tin[u] === undefined && go(u, -1)); console.log(br, [...ap]);
