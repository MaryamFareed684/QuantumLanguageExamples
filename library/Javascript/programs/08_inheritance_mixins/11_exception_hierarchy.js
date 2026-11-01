// Custom error classes in a hierarchy.
class AppError extends Error { constructor(m, code) { super(m); this.name = this.constructor.name; this.code = code; } }
class NotFound extends AppError { constructor(w) { super(`${w} not found`, 404); } }
class Forbidden extends AppError { constructor() { super("forbidden", 403); } }
for (const E of [() => new NotFound("page"), () => new Forbidden(), () => new AppError("x", 1), () => new Error("plain")]) {
  try { throw E(); } catch (e) {
    const t = e instanceof NotFound ? "nf" : e instanceof AppError ? "app" : "other";
    console.log(t, e.name, e.message, e.code, String(e), Object.keys(e));
  }
}
