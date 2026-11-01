// A ring buffer queue and a deque.
class Ring { constructor(n) { this.a = Array(n); this.n = n; this.h = 0; this.c = 0; } put(x) { if (this.c === this.n) return false; this.a[(this.h + this.c++) % this.n] = x; return true; } take() { if (!this.c) return undefined; const v = this.a[this.h]; this.a[this.h] = undefined; this.h = (this.h + 1) % this.n; this.c--; return v; } }
const r = new Ring(2); console.log(r.put(1), r.put(2), r.put(3), r.take(), r.put(4), r.take(), r.take(), r.take(), r);
class Deque { f = []; b = []; pushF(x) { this.f.push(x); } pushB(x) { this.b.push(x); } popF() { if (!this.f.length) while (this.b.length) this.f.push(this.b.pop()); return this.f.pop(); } popB() { if (!this.b.length) while (this.f.length) this.b.push(this.f.pop()); return this.b.pop(); } }
const d = new Deque(); d.pushB(1); d.pushB(2); d.pushF(0); console.log(d.popF(), d.popB(), d.popF(), d.popF());
