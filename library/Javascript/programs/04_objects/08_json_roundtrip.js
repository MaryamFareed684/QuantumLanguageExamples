// JSON.stringify and parse: replacer, reviver, indentation, toJSON.
const data = { n: 1, s: "t\n\"q\"", b: true, nil: null, u: undefined, f() {}, d: new Date(0), a: [undefined, () => 1, NaN, Infinity], nested: { deep: [1, { x: 2 }] }, big: 1e21, neg: -0 };
console.log(JSON.stringify(data));
console.log(JSON.stringify(data.nested, null, 2));
console.log(JSON.stringify(data.nested, null, "--"));
console.log(JSON.stringify({ a: 1, b: 2, c: 3 }, ["a", "c"]), JSON.stringify({ a: 1, b: "x" }, (k, v) => (typeof v === "number" ? v * 2 : v)));
console.log(JSON.parse('{"a":[1,2,{"b":null}],"c":"\\u0041"}'), JSON.parse("1"), JSON.parse('"s"'), JSON.parse("[]"));
console.log(JSON.parse('{"a":1,"b":{"c":2}}', (k, v) => (typeof v === "number" ? v + 1 : v)));
console.log(JSON.stringify({ toJSON() { return { x: 1 }; } }), JSON.stringify("s"), JSON.stringify(1), JSON.stringify(null), JSON.stringify(undefined), JSON.stringify(() => 1));
try { JSON.parse("{bad"); } catch (e) { console.log(e.name); }
const c = {}; c.self = c; try { JSON.stringify(c); } catch (e) { console.log(e.name); }
