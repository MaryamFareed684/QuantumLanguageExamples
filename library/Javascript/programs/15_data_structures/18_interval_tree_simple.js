// Interval scheduling and a calendar with overlap checks.
const pick = (a) => { let e = -Infinity; return [...a].sort((x, y) => x[1] - y[1]).filter(([s, f]) => s >= e && ((e = f), true)); };
console.log(pick([[1, 3], [2, 4], [3, 5], [0, 6], [5, 7], [8, 9], [5, 9]]));
class Cal { e = []; book(s, f) { if (this.e.some(([a, b]) => s < b && a < f)) return false; this.e.push([s, f]); return true; } }
const c = new Cal(); console.log(c.book(10, 20), c.book(15, 25), c.book(20, 30), c.e);
const rooms = (a) => { const s = a.map((x) => x[0]).sort((x, y) => x - y), e = a.map((x) => x[1]).sort((x, y) => x - y); let r = 0, j = 0; for (const t of s) t < e[j] ? r++ : j++; return r; }; console.log(rooms([[0, 30], [5, 10], [15, 20]]), rooms([[7, 10], [2, 4]]));
