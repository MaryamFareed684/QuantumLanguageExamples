// Strongly connected components by Tarjan.
const g = { 1: [2], 2: [3], 3: [1, 4], 4: [5], 5: [6], 6: [4, 7], 7: [] };
function scc(g) { let c = 0; const idx = {}, low = {}, on = {}, st = [], o = []; const go = (u) => { idx[u] = low[u] = c++; st.push(u); on[u] = true; for (const v of g[u]) { if (idx[v] === undefined) { go(v); low[u] = Math.min(low[u], low[v]); } else if (on[v]) low[u] = Math.min(low[u], idx[v]); } if (low[u] === idx[u]) { const cc = []; let w; do { w = st.pop(); on[w] = false; cc.push(w); } while (w !== u); o.push(cc.sort()); } }; Object.keys(g).forEach((u) => idx[u] === undefined && go(u)); return o; }
console.log(scc(g), scc({ a: ["b"], b: [] }));
