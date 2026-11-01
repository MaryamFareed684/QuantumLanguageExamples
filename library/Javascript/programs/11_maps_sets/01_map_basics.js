// Map: set, get, has, delete, size and key types.
const m = new Map();
const objKey = { id: 1 }, fnKey = () => 1;
m.set("a", 1).set(1, "num").set("1", "str").set(objKey, "obj").set(fnKey, "fn").set(NaN, "nan").set(0, "zero").set(null, "nil");
console.log(m.get("a"), m.get(1), m.get("1"), m.get(objKey), m.get({ id: 1 }), m.get(fnKey), m.get(NaN), m.get(-0), m.get(null), m.get(undefined), m.size);
console.log(m.has("a"), m.has("z"), m.delete("a"), m.delete("a"), m.size);
console.log(m);
m.clear(); console.log(m, m.size, new Map([["k", 1]]), new Map(Object.entries({ x: 1 })), new Map(new Map([[1, 2]])));
