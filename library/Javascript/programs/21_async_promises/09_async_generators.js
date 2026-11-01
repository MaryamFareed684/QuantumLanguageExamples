// Async generators as streams, with pipeline helpers.
async function* src(n) { for (let i = 1; i <= n; i++) { await new Promise((r) => setTimeout(r, 1)); yield i; } }
async function* map(s, f) { for await (const v of s) yield f(v); }
async function* take(s, k) { let i = 0; for await (const v of s) { if (i++ >= k) return; yield v; } }
const collect = async (s) => { const o = []; for await (const v of s) o.push(v); return o; };
(async () => {
  console.log(await collect(take(map(src(10), (x) => x * x), 3)));
  const g = src(2); console.log(await g.next(), await g.next(), await g.next());
  const c = (async function* () { try { yield 1; yield 2; } finally { console.log("closed"); } })(); for await (const v of c) { console.log(v); break; }
  console.log(Object.getPrototypeOf(src).constructor.name, typeof src(1)[Symbol.asyncIterator]);
})();
