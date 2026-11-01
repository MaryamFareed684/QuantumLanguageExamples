// A promise pool limiting concurrent tasks.
async function pool(tasks, n) { const out = []; let i = 0, act = 0, peak = 0; await Promise.all(Array.from({ length: n }, async () => { while (i < tasks.length) { const k = i++; peak = Math.max(peak, ++act); out[k] = await tasks[k](); act--; } })); return [out, peak]; }
const t = (v, ms) => () => new Promise((r) => setTimeout(() => r(v), ms));
pool([t(1, 4), t(2, 1), t(3, 3), t(4, 1), t(5, 2)], 2).then(console.log);
class Sem { q = []; constructor(n) { this.n = n; } async take() { if (this.n > 0) { this.n--; return; } await new Promise((r) => this.q.push(r)); } give() { const r = this.q.shift(); r ? r() : this.n++; } }
const s = new Sem(1), o = []; const job = async (x) => { await s.take(); o.push("in" + x); await null; o.push("out" + x); s.give(); }; Promise.all([job(1), job(2)]).then(() => console.log(o));
