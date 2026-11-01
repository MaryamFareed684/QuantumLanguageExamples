// Pure transformations of immutable data with spread.
const inc = (o) => ({ ...o, n: o.n + 1 });
const setIn = (o, [k, ...r], v) => ({ ...o, [k]: r.length ? setIn(o[k] ?? {}, r, v) : v });
const a = { n: 1, deep: { x: { y: 1 } } }, b = inc(a), c = setIn(a, ["deep", "x", "y"], 2), d = setIn(a, ["new", "path"], 3);
console.log(a, b, c, d, a.deep === b.deep, a.deep === c.deep, a.deep.x === d.deep.x);
const push = (l, x) => [...l, x], rm = (l, i) => [...l.slice(0, i), ...l.slice(i + 1)], upd = (l, i, f) => l.map((x, j) => (j === i ? f(x) : x));
const l = Object.freeze([1, 2, 3]); console.log(push(l, 4), rm(l, 1), upd(l, 0, (x) => x * 9), l);
