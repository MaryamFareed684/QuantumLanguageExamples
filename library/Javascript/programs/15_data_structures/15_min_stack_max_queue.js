// A stack with min and a queue with a sliding maximum.
class MinStack { s = []; push(x) { const m = this.s.length ? Math.min(x, this.s.at(-1)[1]) : x; this.s.push([x, m]); } pop() { return this.s.pop()[0]; } get min() { return this.s.at(-1)[1]; } }
const m = new MinStack(); [5, 2, 7, 1].forEach((x) => m.push(x)); console.log(m.min, m.pop(), m.min, m.pop(), m.pop(), m.min);
const slide = (a, k) => { const d = [], o = []; a.forEach((x, i) => { while (d.length && a[d.at(-1)] <= x) d.pop(); d.push(i); if (d[0] <= i - k) d.shift(); if (i >= k - 1) o.push(a[d[0]]); }); return o; }; console.log(slide([1, 3, -1, -3, 5, 3, 6, 7], 3));
