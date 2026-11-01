// Differences between Map and plain objects as dictionaries.
const o = {}, m = new Map();
o[1] = "a"; o["1"] = "b"; m.set(1, "a"); m.set("1", "b");
console.log(Object.keys(o).length, m.size, o.__proto__ === Object.prototype, m.get("__proto__"));
console.log("toString" in o, m.has("toString"), JSON.stringify(o), JSON.stringify(m));
const n = {}; n.__proto__ = { x: 1 }; console.log(n.x, Object.keys(n), Object.keys(JSON.parse('{"__proto__":1}')));
const order = { b: 1, 2: 1, a: 1, 1: 1 }; console.log(Object.keys(order), [...new Map([["b", 1], [2, 1], ["a", 1], [1, 1]]).keys()]);
try { Map.prototype.size; } catch (e) { console.log(e.name, typeof Object.getOwnPropertyDescriptor(Map.prototype, "size").get); }
