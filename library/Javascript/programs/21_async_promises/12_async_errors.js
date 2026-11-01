// Rejections through chains, await, finally, and nested try.
const f = async (x) => { if (x) throw new Error("e" + x); return "v"; };
(async () => {
  await f(1).then(() => console.log("no"), (e) => console.log("second arg", e.message));
  await f(2).catch((e) => { throw new Error(e.message + "+rethrown"); }).catch((e) => console.log(e.message));
  await f(3).finally(() => { console.log("fin"); }).catch((e) => console.log(e.message));
  await f(0).finally(() => { throw new Error("from finally"); }).catch((e) => console.log(e.message));
  try { await Promise.reject(1); } catch (e) { console.log(typeof e); } finally { console.log("try fin"); }
  const g = async () => { try { return await f(4); } catch { return "fallback"; } }; const h = async () => { try { return f(5); } catch { return "not caught here"; } };
  console.log(await g()); console.log(await h().catch((e) => "escaped " + e.message));
  console.log(await Promise.resolve().then(() => { throw 5; }).catch((x) => x + 1), await Promise.reject(1).catch((x) => x).then((x) => x * 10));
})();
