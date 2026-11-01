// BFS over words: a word ladder with path recovery.
const dict = new Set("hot dot dog lot log cog".split(" "));
function ladder(a, b) {
  const q = [[a]], seen = new Set([a]);
  while (q.length) { const p = q.shift(), w = p.at(-1); if (w === b) return p; for (let i = 0; i < w.length; i++) for (let c = 97; c < 123; c++) { const n = w.slice(0, i) + String.fromCharCode(c) + w.slice(i + 1); if (dict.has(n) && !seen.has(n)) { seen.add(n); q.push([...p, n]); } } }
  return null;
}
console.log(ladder("hit", "cog"), ladder("hit", "xyz"), ladder("hot", "hot"));
