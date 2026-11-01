// Merging objects with spread and Object.assign.
const base = { a: 1, b: { c: 2 }, d: 3 };
const over = { d: 4, e: 5 };
console.log({ ...base, ...over }, { ...over, ...base }, { ...base, d: 9 }, { ...null, ...undefined, ..."hi", ...[7] });
const target = { z: 0 };
const ret = Object.assign(target, base, over);
console.log(ret === target, target);
const copy = { ...base }; copy.b.c = 99; copy.a = 100;
console.log(base, copy);
function merge(x, y) {
  const out = { ...x };
  for (const [k, v] of Object.entries(y)) out[k] = v && typeof v === "object" && !Array.isArray(v) ? merge(out[k] || {}, v) : v;
  return out;
}
console.log(merge({ a: { b: 1, c: 2 }, l: [1] }, { a: { c: 3, d: { e: 4 } }, l: [2] }));
