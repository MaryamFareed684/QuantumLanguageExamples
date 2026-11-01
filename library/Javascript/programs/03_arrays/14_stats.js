// Mean, median, mode, variance and percentiles.
const data = [2, 4, 4, 4, 5, 5, 7, 9, 12, 30];
const mean = (d) => d.reduce((a, b) => a + b) / d.length;
const median = (d) => { const s = [...d].sort((a, b) => a - b), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const mode = (d) => { const c = new Map(); d.forEach((x) => c.set(x, (c.get(x) || 0) + 1)); return [...c].sort((a, b) => b[1] - a[1])[0][0]; };
const variance = (d) => { const m = mean(d); return d.reduce((s, x) => s + (x - m) ** 2, 0) / d.length; };
const pct = (d, p) => { const s = [...d].sort((a, b) => a - b); return s[Math.ceil((p / 100) * s.length) - 1]; };
console.log(mean(data), median(data), mode(data), variance(data), Math.sqrt(variance(data)));
console.log(pct(data, 50), pct(data, 90), pct(data, 100), Math.min(...data), Math.max(...data));
