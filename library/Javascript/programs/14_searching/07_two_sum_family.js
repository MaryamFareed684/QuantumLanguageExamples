// Two sum, three sum and subarray sum with hashing.
const two = (a, t) => { const s = new Map(); for (let i = 0; i < a.length; i++) { if (s.has(t - a[i])) return [s.get(t - a[i]), i]; s.set(a[i], i); } return null; };
console.log(two([2, 7, 11, 15], 9), two([3, 3], 6), two([1], 2));
const three = (a) => { a = [...a].sort((x, y) => x - y); const o = []; for (let i = 0; i < a.length - 2; i++) { if (i && a[i] === a[i - 1]) continue; let l = i + 1, h = a.length - 1; while (l < h) { const s = a[i] + a[l] + a[h]; if (s === 0) { o.push([a[i], a[l], a[h]]); while (a[l] === a[l + 1]) l++; l++; h--; } else s < 0 ? l++ : h--; } } return o; };
console.log(three([-1, 0, 1, 2, -1, -4]));
const sub = (a, k) => { const c = new Map([[0, 1]]); let s = 0, n = 0; for (const x of a) { s += x; n += c.get(s - k) ?? 0; c.set(s, (c.get(s) ?? 0) + 1); } return n; }; console.log(sub([1, 1, 1], 2), sub([1, 2, 3], 3));
