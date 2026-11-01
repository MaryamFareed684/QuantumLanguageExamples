// Async generators and for-await over sync and async sources.
async function* ticker(n) { for (let i = 0; i < n; i++) { await null; yield i; } }
async function main() {
  for await (const v of ticker(3)) console.log("tick", v);
  for await (const v of [Promise.resolve(1), 2]) console.log("arr", v);
  const g = ticker(2);
  console.log(await g.next(), await g.return("x"), await g.next());
  const it = { [Symbol.asyncIterator]() { let i = 0; return { next: async () => ({ value: i, done: i++ >= 2 }) }; } };
  for await (const v of it) console.log("custom", v);
  console.log(Object.prototype.toString.call(ticker(1)), ticker.constructor.name);
}
main().then(() => console.log("done"));
