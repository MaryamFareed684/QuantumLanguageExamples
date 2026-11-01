// Functional lenses for nested reads and writes.
const lens = (g, s) => ({ g, s }), prop = (k) => lens((o) => o[k], (v, o) => ({ ...o, [k]: v })), idx = (i) => lens((a) => a[i], (v, a) => a.map((x, j) => (j === i ? v : x)));
const view = (l, o) => l.g(o), set = (l, v, o) => l.s(v, o), over = (l, f, o) => l.s(f(l.g(o)), o), pipeL = (...ls) => ls.reduce((a, b) => lens((o) => b.g(a.g(o)), (v, o) => a.s(b.s(v, a.g(o)), o)));
const d = { user: { tags: ["a", "b"], n: 1 } }, tag1 = pipeL(prop("user"), prop("tags"), idx(1));
console.log(view(tag1, d), JSON.stringify(set(tag1, "Z", d)), JSON.stringify(over(tag1, (s) => s + s, d)), JSON.stringify(d), set(prop("x"), 1, {}));
