// all, allSettled, race and any.
const d = (ms, v, f) => new Promise((r, j) => setTimeout(() => (f ? j(new Error(v)) : r(v)), ms));
(async () => {
  console.log(await Promise.all([d(2, "a"), d(1, "b")]), await Promise.all([]));
  await Promise.all([d(5, "s"), d(1, "fail", true)]).catch((e) => console.log("all", e.message));
  console.log(await Promise.allSettled([d(1, "a"), d(1, "b", true), 3]));
  console.log(await Promise.race([d(9, "slow"), d(1, "fast")]));
  await Promise.race([d(9, "s"), d(1, "rf", true)]).catch((e) => console.log("race", e.message));
  console.log(await Promise.any([d(1, "x", true), d(5, "y")]));
  await Promise.any([d(1, "p", true), d(1, "q", true)]).catch((e) => console.log(e.name, e.message, e.errors.map((x) => x.message)));
})();
