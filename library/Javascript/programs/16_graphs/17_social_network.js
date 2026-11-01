// Friends of friends, degrees and common neighbours.
const fr = { ann: ["bob", "cat"], bob: ["ann", "dan"], cat: ["ann", "dan", "eve"], dan: ["bob", "cat"], eve: ["cat"], fay: [] };
const fof = (u) => [...new Set(fr[u].flatMap((f) => fr[f]))].filter((x) => x !== u && !fr[u].includes(x)).sort();
for (const u of Object.keys(fr)) console.log(u, fr[u].length, fof(u));
const common = (a, b) => fr[a].filter((x) => fr[b].includes(x)); console.log(common("ann", "dan"), common("eve", "fay"));
const sep = (a, b) => { const d = { [a]: 0 }, q = [a]; for (const u of q) for (const v of fr[u]) if (!(v in d)) { d[v] = d[u] + 1; q.push(v); } return d[b] ?? "unreachable"; }; console.log(sep("eve", "bob"), sep("ann", "fay"));
