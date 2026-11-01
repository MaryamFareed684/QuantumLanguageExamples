// An order workflow simulated with async steps.
const step = async (n, o, f) => { await new Promise((r) => setTimeout(r, 1)); console.log(`${o.id}: ${n}`); if (f?.(o)) throw new Error(`${n} failed for ${o.id}`); return { ...o, [n]: true }; };
async function run(o) { try { o = await step("validate", o, (x) => !x.items); o = await step("charge", o, (x) => x.total > 100); o = await step("ship", o); return { ...o, state: "done" }; } catch (e) { return { id: o.id, state: "failed", why: e.message }; } }
(async () => { const r = []; for (const o of [{ id: 1, items: 2, total: 5 }, { id: 2, total: 1 }, { id: 3, items: 1, total: 500 }]) r.push(await run(o)); console.log(r); console.log(await Promise.all([{ id: 4, items: 1, total: 1 }, { id: 5, items: 1, total: 2 }].map(run))); })();
