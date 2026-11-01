// AbortController, AbortSignal and cancellable sleeps.
const c = new AbortController(); console.log(c.signal.aborted, c.signal, typeof c.abort);
const sleep = (ms, s) => new Promise((r, j) => { const t = setTimeout(r, ms, "slept"); s?.addEventListener("abort", () => { clearTimeout(t); j(s.reason); }, { once: true }); });
sleep(1000, c.signal).catch((e) => console.log(e.name, e.message));
c.abort(); console.log(c.signal.aborted);
const d = new AbortController(); sleep(50, d.signal).catch((e) => console.log(e)); d.abort(new Error("custom"));
console.log(AbortSignal.abort().aborted); try { AbortSignal.abort().throwIfAborted(); } catch (e) { console.log(e.name, e.code); }
const et = new EventTarget(); et.addEventListener("hi", (e) => console.log(e.type, e instanceof Event, e.target === et)); console.log(et.dispatchEvent(new Event("hi")));
