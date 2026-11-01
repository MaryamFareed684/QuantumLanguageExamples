// JSON and structuredClone with special values.
const v = { d: new Date(0), m: new Map([[1, 2]]), s: new Set([1]), r: /x/g, u: undefined, n: NaN, i: Infinity, b: 1n === 1n, a: [undefined], nested: { z: null } };
console.log(JSON.stringify(v)); console.log(structuredClone(v));
console.log(JSON.stringify({ a: new Number(1), b: new String("s"), c: new Boolean(false), d: Object(1) }), JSON.stringify([new Set([1]), new Map()]));
try { JSON.stringify({ b: 1n }); } catch (e) { console.log(e.name, e.message); }
try { structuredClone(() => 1); } catch (e) { console.log(e.name); }
BigInt.prototype.toJSON = function () { return this.toString(); }; console.log(JSON.stringify({ b: 1n })); delete BigInt.prototype.toJSON;
console.log(JSON.stringify("\u{1F600}"), JSON.stringify("\uD83D"), JSON.parse('"\\uD83D\\uDE00"'), JSON.stringify({ "": 1, " ": 2 }), JSON.parse(' {"a" : [ 1 , 2 ] } '), JSON.parse("1e3"), JSON.parse("-0"), JSON.stringify(-0), JSON.stringify(1e21), JSON.stringify(0.1));
console.log(JSON.stringify({ a: 1, b: [1, 2] }, null, 20).split("\n")[1].length, JSON.stringify({ a: 1 }, null, "abcdefghijklmnop"), JSON.stringify([1], null, 0));
