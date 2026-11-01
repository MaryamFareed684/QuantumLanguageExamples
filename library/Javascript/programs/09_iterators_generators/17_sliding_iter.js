// Sliding-window statistics over a stream.
function* windows(it, n) { const w = []; for (const v of it) { w.push(v); if (w.length > n) w.shift(); if (w.length === n) yield [...w]; } }
const data = [3, 8, 1, 9, 4, 7, 2];
console.log([...windows(data, 3)].map((w) => Math.max(...w)), [...windows(data, 2)].map(([a, b]) => b - a));
function* ema(it, a) { let s; for (const v of it) { s = s === undefined ? v : a * v + (1 - a) * s; yield +s.toFixed(3); } }
console.log([...ema(data, 0.5)]);
