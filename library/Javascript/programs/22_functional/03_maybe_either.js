// Maybe and Either as small functional containers.
const Just = (v) => ({ map: (f) => Maybe(f(v)), chain: (f) => f(v), or: () => v, toString: () => `Just(${v})` });
const Nothing = { map: () => Nothing, chain: () => Nothing, or: (d) => d, toString: () => "Nothing" };
const Maybe = (v) => (v === null || v === undefined ? Nothing : Just(v));
const u = { name: "A", addr: { city: "Oslo" } }, get = (k) => (o) => Maybe(o[k]);
console.log(`${Maybe(u).chain(get("addr")).chain(get("city")).map((s) => s.toUpperCase())}`, `${Maybe(u).chain(get("nope")).chain(get("city"))}`, Maybe(null).or("dflt"), Maybe(0).or("dflt"));
const Right = (v) => ({ map: (f) => Right(f(v)), fold: (_, r) => r(v) }), Left = (e) => ({ map: () => Left(e), fold: (l) => l(e) }); const parse = (s) => { try { return Right(JSON.parse(s)); } catch (e) { return Left(e.name); } };
console.log(parse("[1]").map((a) => a.length).fold((e) => e, (v) => v), parse("{").map((a) => a.length).fold((e) => e, (v) => v));
