// async functions, await and try/catch.
const delay = (ms, v, fail) => new Promise((res, rej) => setTimeout(() => (fail ? rej(new Error(v)) : res(v)), ms));
async function main() {
  console.log(await delay(5, "a"), await 7, await { then(r) { r("thenable"); } });
  try { await delay(1, "boom", true); } catch (e) { console.log("caught", e.message); }
  const f = async () => 1, g = async () => { throw new TypeError("t"); };
  console.log(f(), await f(), await g().catch((e) => e.name), f.constructor.name, typeof f);
  const r = await Promise.all([delay(3, "x"), delay(1, "y"), 3]); console.log(r);
  return "done";
}
main().then(console.log).finally(() => console.log("bye"));
