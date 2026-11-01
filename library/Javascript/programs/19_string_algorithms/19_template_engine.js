// A template engine with loops, conditions and filters.
function render(t, d) {
  const look = (p, s) => p.split(".").reduce((o, k) => o?.[k], s);
  const fil = { upper: (x) => String(x).toUpperCase(), len: (x) => x.length, money: (x) => "$" + (+x).toFixed(2) };
  const go = (t, s) => t
    .replace(/\{\{#each (\w+)\}\}([\s\S]*?)\{\{\/each\}\}/g, (_, k, b) => (look(k, s) ?? []).map((x, i) => go(b, { ...s, this: x, i, ...(typeof x === "object" ? x : {}) })).join(""))
    .replace(/\{\{#if ([\w.]+)\}\}([\s\S]*?)(?:\{\{else\}\}([\s\S]*?))?\{\{\/if\}\}/g, (_, k, a, b = "") => go(look(k, s) ? a : b, s))
    .replace(/\{\{\s*([\w.]+)(?:\s*\|\s*(\w+))?\s*\}\}/g, (_, k, f) => { const v = look(k, s); return v === undefined ? "" : f ? fil[f](v) : v; });
  return go(t, d);
}
console.log(render("Hi {{name|upper}}! {{#if vip}}VIP{{else}}guest{{/if}} {{missing}}<{{#each items}}{{i}}:{{n}}={{p|money}};{{/each}}> {{items|len}} {{a.b}}", { name: "ann", vip: 0, items: [{ n: "x", p: 1 }, { n: "y", p: 2.5 }], a: { b: "deep" } }));
