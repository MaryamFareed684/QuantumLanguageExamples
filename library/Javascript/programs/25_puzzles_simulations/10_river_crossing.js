// Wolf, goat, cabbage and water jugs by BFS.
const bfs = (st, next, goal) => { const q = [[st]], seen = new Set([st]); while (q.length) { const p = q.shift(), c = p.at(-1); if (goal(c)) return p; for (const n of next(c)) if (!seen.has(n)) { seen.add(n); q.push([...p, n]); } } return null; };
const safe = (b) => !(b === "" ? false : false); const items = "wgc"; const bad = (s) => (s.includes("w") && s.includes("g")) || (s.includes("g") && s.includes("c"));
const nx = (s) => { const [l, r, f] = s.split("|"); const here = f === "L" ? l : r, o = []; for (const i of ["", ...here]) { const a = [...here].filter((x) => x !== i).join(""), b = [...(f === "L" ? r : l), ...(i ? [i] : [])].sort().join(""); if (bad(a)) continue; o.push(f === "L" ? `${a}|${b}|R` : `${b}|${a}|L`); } return o; };
console.log(bfs("cgw||L", nx, (s) => s.startsWith("|")));
const jugs = (A, B, T) => bfs("0,0", (s) => { const [a, b] = s.split(",").map(Number), p = Math.min(a, B - b), q = Math.min(b, A - a); return [[A, b], [a, B], [0, b], [a, 0], [a - p, b + p], [a + q, b - q]].map((x) => x.join()); }, (s) => s.split(",").includes(String(T))); console.log(jugs(3, 5, 4), jugs(2, 4, 3));
