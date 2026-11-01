// Shortest path in a grid with BFS.
const grid = ["S.#.....", ".##.###.", "....#...", ".##...#E"].map((r) => [...r]);
function bfs() {
  const q = [[0, 0, 0]], seen = new Set(["0,0"]);
  while (q.length) { const [r, c, d] = q.shift(); if (grid[r][c] === "E") return d; for (const [x, y] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) { const n = r + x, m = c + y, k = n + "," + m; if (grid[n]?.[m] && grid[n][m] !== "#" && !seen.has(k)) { seen.add(k); q.push([n, m, d + 1]); } } }
  return -1;
}
console.log(bfs());
