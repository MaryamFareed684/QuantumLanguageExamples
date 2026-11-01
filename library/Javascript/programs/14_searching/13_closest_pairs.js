// Closest values, closest pair of points and nearest in sorted.
const near = (a, t) => a.reduce((b, x) => (Math.abs(x - t) < Math.abs(b - t) ? x : b));
console.log(near([1, 5, 9, 14], 7), near([1, 5, 9, 14], 12));
const minDiff = (a) => { const s = [...a].sort((x, y) => x - y); return s.slice(1).reduce((b, x, i) => Math.min(b, x - s[i]), Infinity); }; console.log(minDiff([4, 9, 1, 32, 13]));
const pts = [[2, 3], [12, 30], [40, 50], [5, 1], [12, 10], [3, 4]]; let best = [Infinity];
for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) { const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1]); if (d < best[0]) best = [d, pts[i], pts[j]]; }
console.log(best);
