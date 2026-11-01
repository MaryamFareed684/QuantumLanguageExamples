// Custom error classes with extra fields and cause chains.
class ValidationError extends Error {
  constructor(field, msg, opts) { super(`${field}: ${msg}`, opts); this.name = "ValidationError"; this.field = field; }
}
function parseAge(s) {
  const n = Number(s);
  if (Number.isNaN(n)) throw new ValidationError("age", "not a number");
  if (n < 0) throw new ValidationError("age", "negative");
  return n;
}
for (const s of ["5", "x", "-1"]) { try { console.log(parseAge(s)); } catch (e) { console.log(e.name, e.field, e.message, e instanceof ValidationError, e.constructor.name); } }
function load() { try { parseAge("x"); } catch (c) { throw new Error("load failed", { cause: c }); } }
try { load(); } catch (e) { let c = e, d = 0; while (c) { console.log(" ".repeat(d++) + c.message); c = c.cause; } }
