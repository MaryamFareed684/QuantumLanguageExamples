// Generator functions, next, return and throw.
function* g() { try { const a = yield 1; console.log("got", a); yield 2; yield 3; } finally { console.log("cleanup"); } }
const i = g();
console.log(i.next("ignored"), i.next("hi"), i.return("early"), i.next());
const j = g(); j.next();
try { j.throw(new Error("boom")); } catch (e) { console.log(e.message); }
function* c() { try { yield 1; } catch (e) { yield "caught " + e; } yield "end"; }
const k = c(); console.log(k.next().value, k.throw("x").value, k.next().value, k.next().done);
console.log(i[Symbol.iterator]() === i, typeof i.next, String(i), g.constructor.name);
console.log(i, g);
