// An AVL tree keeping balance through rotations.
const h = (n) => (n ? n.h : 0), up = (n) => ((n.h = 1 + Math.max(h(n.l), h(n.r))), n);
const rr = (y) => { const x = y.l; y.l = x.r; x.r = y; up(y); return up(x); }, rl = (x) => { const y = x.r; x.r = y.l; y.l = x; up(x); return up(y); };
const ins = (n, v) => { if (!n) return { v, l: null, r: null, h: 1 }; if (v < n.v) n.l = ins(n.l, v); else n.r = ins(n.r, v); up(n); const b = h(n.l) - h(n.r); if (b > 1) { if (v > n.l.v) n.l = rl(n.l); return rr(n); } if (b < -1) { if (v < n.r.v) n.r = rr(n.r); return rl(n); } return n; };
let r = null; for (let i = 1; i <= 1000; i++) r = ins(r, i);
const io = (n, o = []) => { if (n) { io(n.l, o); o.push(n.v); io(n.r, o); } return o; };
console.log(r.h, r.v, io(r).length, io(r).every((v, i) => v === i + 1));
let s = null; [30, 20, 10, 25, 28].forEach((v) => (s = ins(s, v))); console.log(s.v, s.l.v, s.r.v, s);
