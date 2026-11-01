// finally for cleanup, nested resources and closing order.
const log = [];
const open = (n) => { log.push("open " + n); return { n, close() { log.push("close " + n); } }; };
const using_ = (n, f) => { const r = open(n); try { return f(r); } finally { r.close(); } };
console.log(using_("a", (a) => using_("b", (b) => a.n + b.n)));
try { using_("x", () => using_("y", () => { throw new Error("mid"); })); } catch (e) { log.push("handled " + e.message); }
console.log(log);
function order() { const o = []; try { o.push("t"); throw 1; } catch { o.push("c"); } finally { o.push("f"); } o.push("after"); return o; }
console.log(order());
