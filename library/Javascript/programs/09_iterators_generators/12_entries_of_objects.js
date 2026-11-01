// Making plain objects iterable and using entries.
const o = { a: 1, b: 2, *[Symbol.iterator]() { for (const k of Object.keys(this)) yield [k, this[k]]; } };
console.log([...o], new Map(o).get("b"));
for (const [k, v] of o) console.log(k, v);
try { for (const x of { n: 1 }) console.log(x); } catch (e) { console.log(e.name + ": " + e.message); }
try { const [a] = {}; } catch (e) { console.log(e.name + ": " + e.message); }
try { [...1]; } catch (e) { console.log(e.name + ": " + e.message); }
try { new Map([1]); } catch (e) { console.log(e.name + ": " + e.message); }
for (const c of new String("ok")) console.log(c);
