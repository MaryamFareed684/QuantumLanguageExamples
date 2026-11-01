// Linked lists: reverse, middle, cycle detection, merge.
const L = (...v) => v.reduceRight((n, x) => ({ v: x, next: n }), null), arr = (n) => { const o = []; for (; n; n = n.next) o.push(n.v); return o; };
const rev = (n) => { let p = null; while (n) [n.next, p, n] = [p, n, n.next]; return p; };
const mid = (n) => { let s = n, f = n; while (f?.next) { s = s.next; f = f.next.next; } return s?.v; };
const merge = (a, b) => (!a ? b : !b ? a : a.v < b.v ? { v: a.v, next: merge(a.next, b) } : { v: b.v, next: merge(a, b.next) });
console.log(arr(rev(L(1, 2, 3))), mid(L(1, 2, 3, 4, 5)), mid(L(1, 2)), arr(merge(L(1, 3), L(2, 4, 5))), arr(rev(null)));
const c = L(1, 2, 3); c.next.next.next = c.next;
const cyc = (n) => { let s = n, f = n; while (f?.next) { s = s.next; f = f.next.next; if (s === f) return true; } return false; }; console.log(cyc(c), cyc(L(1, 2)));
console.log(L(1, 2, 3, 4, 5), c);
