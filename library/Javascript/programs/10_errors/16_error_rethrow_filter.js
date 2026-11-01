// Filtering by type and rethrowing the rest.
class Net extends Error { name = "Net"; } class Parse extends Error { name = "Parse"; }
function run(k) { if (k === 1) throw new Net("n"); if (k === 2) throw new Parse("p"); if (k === 3) throw new TypeError("t"); return "fine"; }
const guard = (k) => { try { return run(k); } catch (e) { if (e instanceof Net) return "retry"; if (e instanceof Parse) return "skip"; throw e; } };
for (const k of [0, 1, 2, 3]) { try { console.log(guard(k)); } catch (e) { console.log("escaped", e.name); } }
console.log(new Net("a"), Object.keys(new Parse("b")));
