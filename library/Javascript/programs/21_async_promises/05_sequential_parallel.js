// Sequential vs parallel awaits, and order of completion.
const log = []; const w = (n, ms) => new Promise((r) => { log.push("start " + n); setTimeout(() => { log.push("end " + n); r(n); }, ms); });
(async () => {
  for (const [n, m] of [["a", 6], ["b", 1]]) await w(n, m);
  console.log(log.splice(0));
  await Promise.all([w("c", 6), w("d", 1)]);
  console.log(log.splice(0));
  const results = await [1, 2, 3].reduce(async (acc, x) => [...(await acc), x * 2], Promise.resolve([])); console.log(results);
  console.log(await Promise.all([1, 2, 3].map(async (x) => x * 3)));
})();
