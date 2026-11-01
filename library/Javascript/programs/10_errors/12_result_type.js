// Result objects instead of exceptions.
const Ok = (v) => ({ ok: true, v, map: (f) => Ok(f(v)), chain: (f) => f(v), or: () => v });
const Err = (e) => ({ ok: false, e, map: () => Err(e), chain: () => Err(e), or: (d) => d });
const safeDiv = (a, b) => (b === 0 ? Err("div0") : Ok(a / b));
const parse = (s) => (/^-?\d+$/.test(s) ? Ok(+s) : Err("nan " + s));
console.log(parse("10").chain((a) => safeDiv(a, 2)).map((x) => x + 1).or(-1), parse("x").chain((a) => safeDiv(a, 2)).or(-1), safeDiv(1, 0).e, parse("4").chain((a) => safeDiv(a, 0)).ok);
const all = (rs) => rs.reduce((acc, r) => (acc.ok && r.ok ? Ok([...acc.v, r.v]) : acc.ok ? r : acc), Ok([]));
console.log(all(["1", "2"].map(parse)).v, all(["1", "b", "c"].map(parse)).e);
