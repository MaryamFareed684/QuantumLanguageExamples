// pick, omit, get-by-path and set-by-path helpers.
const pick = (o, ...ks) => Object.fromEntries(ks.filter((k) => k in o).map((k) => [k, o[k]]));
const omit = (o, ...ks) => Object.fromEntries(Object.entries(o).filter(([k]) => !ks.includes(k)));
const get = (o, path, d) => path.split(".").reduce((c, k) => (c == null ? c : c[k]), o) ?? d;
function set(o, path, v) {
  const ks = path.split(".");
  ks.slice(0, -1).reduce((c, k) => (c[k] ??= {}), o)[ks.at(-1)] = v;
  return o;
}
const u = { id: 1, name: "n", pass: "s", prefs: { theme: { color: "red" } } };
console.log(pick(u, "id", "name", "zz"), omit(u, "pass", "prefs"), get(u, "prefs.theme.color"), get(u, "prefs.x.y", "dflt"));
console.log(set({}, "a.b.c", 1), set({ a: 1 }, "b", 2));
