// Async array helpers with order preserved.
const wait = (x) => new Promise((r) => setTimeout(() => r(x), (5 - x) % 5));
const amap = (a, f) => Promise.all(a.map(f)), afilter = async (a, f) => { const k = await amap(a, f); return a.filter((_, i) => k[i]); }, areduce = async (a, f, i) => { let v = i; for (const x of a) v = await f(v, x); return v; };
(async () => { console.log(await amap([1, 2, 3, 4], wait), await afilter([1, 2, 3, 4], async (x) => (await wait(x)) % 2 === 0), await areduce([1, 2, 3], async (s, x) => s + (await wait(x)), 0)); const done = []; await Promise.all([3, 1, 2].map(async (x) => { await wait(x); done.push(x); })); console.log(done); })();
