// Grid shortest paths: BFS with obstacles, and A*.
const G = ["..#....", ".##.##.", "....#..", ".##.#.#", "...#..."].map((r) => [...r]);
const astar = ([sr, sc], [tr, tc]) => { const h = (r, c) => Math.abs(r - tr) + Math.abs(c - tc), o = [[h(sr, sc), 0, sr, sc]], best = new Map([[`${sr},${sc}`, 0]]); let pops = 0; while (o.length) { o.sort((a, b) => a[0] - b[0]); const [, g, r, c] = o.shift(); pops++; if (r === tr && c === tc) return [g, pops]; for (const [a, b] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) { const x = r + a, y = c + b, k = `${x},${y}`; if (G[x]?.[y] === "." && (best.get(k) ?? Infinity) > g + 1) { best.set(k, g + 1); o.push([g + 1 + h(x, y), g + 1, x, y]); } } } return null; };
console.log(astar([0, 0], [4, 6]), astar([0, 0], [0, 0]), astar([0, 0], [0, 3]));
