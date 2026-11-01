// Transforming nested JSON: flatten, unflatten, and pretty print.
const o = { user: { id: 7, name: { first: "A", last: "B" }, tags: ["x", "y"] }, ok: true, n: null };
const flat = (v, p = "", out = {}) => { if (v && typeof v === "object") { for (const [k, x] of Object.entries(v)) flat(x, p ? `${p}.${k}` : k, out); } else out[p] = v; return out; };
const unflat = (f) => { const r = {}; for (const [k, v] of Object.entries(f)) { const ps = k.split("."); ps.slice(0, -1).reduce((c, x, i) => (c[x] ??= /^\d+$/.test(ps[i + 1]) ? [] : {}), r)[ps.at(-1)] = v; } return r; };
console.log(flat(o), JSON.stringify(unflat(flat(o))) === JSON.stringify(o));
console.log(JSON.stringify(o, null, 1)); console.log(JSON.stringify(o, null, "\t")); console.log(JSON.stringify([[], {}, [[]], [{}]], null, 2)); console.log(JSON.stringify({ a: [] }, null, 4));
