// Validating records and collecting all problems.
const rules = { name: (v) => (typeof v === "string" && v ? null : "required"), age: (v) => (Number.isInteger(v) && v >= 0 ? null : "bad age"), email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "bad email") };
const check = (r) => Object.entries(rules).flatMap(([k, f]) => { const m = f(r[k]); return m ? [`${k}: ${m}`] : []; });
for (const r of [{ name: "a", age: 1, email: "a@b.c" }, { name: "", age: -1, email: "x" }, {}]) console.log(check(r));
const assert = (c, m) => { if (!c) throw new Error("Assertion failed: " + m); };
try { assert(1 + 1 === 2, "math"); assert(1 > 2, "order"); } catch (e) { console.log(e.message); }
const nodeAssert = require("assert");
try { nodeAssert.strictEqual(1, 2); } catch (e) { console.log(e.name, e.code); }
try { nodeAssert.deepStrictEqual([1], [1]); console.log("deep ok"); nodeAssert.ok(false, "custom"); } catch (e) { console.log(e.message); }
