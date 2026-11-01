// A sequential async task queue with priorities.
class Q { items = []; running = false; add(f, p = 0) { return new Promise((res, rej) => { this.items.push({ f, p, res, rej }); this.items.sort((a, b) => b.p - a.p); this.#run(); }); } async #run() { if (this.running) return; this.running = true; while (this.items.length) { const { f, res, rej } = this.items.shift(); try { res(await f()); } catch (e) { rej(e); } } this.running = false; } }
const q = new Q(), t = (n) => async () => { console.log("run", n); await null; return n; };
q.add(t("first")).then((v) => console.log("got", v)); q.add(t("low"), 1); q.add(t("high"), 9); q.add(async () => { throw new Error("oops"); }, 5).catch((e) => console.log(e.message));
