// Ternary and golden-section search for extrema.
const ter = (f, l, h) => { for (let i = 0; i < 200; i++) { const a = l + (h - l) / 3, b = h - (h - l) / 3; f(a) < f(b) ? (h = b) : (l = a); } return (l + h) / 2; };
console.log(ter((x) => (x - 2) ** 2 + 1, -10, 10).toFixed(6));
const phi = (Math.sqrt(5) - 1) / 2; const gold = (f, a, b) => { let c = b - phi * (b - a), d = a + phi * (b - a); while (b - a > 1e-9) { if (f(c) < f(d)) b = d; else a = c; c = b - phi * (b - a); d = a + phi * (b - a); } return (a + b) / 2; };
console.log(gold((x) => Math.cos(x), 0, 6).toFixed(6));
const peakI = (a) => { let l = 0, h = a.length - 1; while (h - l > 2) { const m1 = l + ((h - l) / 3 | 0), m2 = h - ((h - l) / 3 | 0); a[m1] < a[m2] ? (l = m1) : (h = m2); } return Math.max(...a.slice(l, h + 1)); }; console.log(peakI([1, 3, 8, 12, 9, 2]));
