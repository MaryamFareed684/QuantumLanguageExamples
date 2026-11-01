// Composable validators collecting errors.
const rule = (m, f) => (v) => (f(v) ? [] : [m]), all = (...r) => (v) => r.flatMap((f) => f(v)), field = (k, r) => (o) => r(o[k]).map((m) => `${k} ${m}`), schema = (...f) => (o) => f.flatMap((g) => g(o));
const req = rule("is required", (v) => v !== undefined && v !== ""), len = (n) => rule(`must be at least ${n}`, (v) => (v ?? "").length >= n), isInt = rule("must be int", Number.isInteger), range = (a, b) => rule(`must be in ${a}..${b}`, (v) => v >= a && v <= b), match = (r, m) => rule(m, (v) => r.test(v ?? ""));
const user = schema(field("name", all(req, len(2))), field("age", all(isInt, range(0, 150))), field("mail", match(/@/, "needs @")));
console.log(user({ name: "Al", age: 30, mail: "a@b" }), user({ name: "", age: 200.5 }), user({}));
