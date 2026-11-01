// A CSV parser with quoted fields and a query-string parser.
const csv = (t) => { const rows = []; let r = [], f = "", q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"' && t[i + 1] === '"') { f += '"'; i++; } else if (c === '"') q = false; else f += c; } else if (c === '"') q = true; else if (c === ",") { r.push(f); f = ""; } else if (c === "\n") { r.push(f); rows.push(r); r = []; f = ""; } else f += c; } if (f || r.length) { r.push(f); rows.push(r); } return rows; };
const d = 'name,qty,note\n"Smith, J",2,"said ""hi"""\nx,,\n"multi\nline",3,z'; const r = csv(d); console.log(r, r.length);
const [h, ...rows] = r; console.log(rows.map((x) => Object.fromEntries(h.map((k, i) => [k, x[i]]))));
const qs = (s) => Object.fromEntries(s.replace(/^\?/, "").split("&").filter(Boolean).map((p) => p.split("=").map(decodeURIComponent))); console.log(qs("?a=1&b=two%20words&c="), qs(""));
console.log(new URLSearchParams("a=1&a=2&b=x+y").getAll("a"), [...new URLSearchParams({ k: "v w" })], new URL("https://u:p@ex.org:8080/p/a?q=1#h").pathname, new URL("https://ex.org/a?q=1").searchParams.get("q"), new URL("/x", "http://h").href);
