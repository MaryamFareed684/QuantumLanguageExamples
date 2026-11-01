// Deep equality and deep clone written by hand.
function eq(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== "object" || typeof b !== "object" || !a || !b) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ka = Object.keys(a), kb = Object.keys(b);
  return ka.length === kb.length && ka.every((k) => eq(a[k], b[k]));
}
console.log(eq({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] }), eq({ a: 1 }, { a: 2 }), eq([1], { 0: 1 }), eq(NaN, NaN), eq(0, -0), eq(null, {}));
const clone = (v) => (v && typeof v === "object" ? (Array.isArray(v) ? v.map(clone) : Object.fromEntries(Object.entries(v).map(([k, x]) => [k, clone(x)]))) : v);
const x = { l: [1, { m: 2 }] }, y = clone(x); y.l[1].m = 9;
console.log(x, y, Object.is(0, -0), Object.is(NaN, NaN), 0 === -0, NaN === NaN);
