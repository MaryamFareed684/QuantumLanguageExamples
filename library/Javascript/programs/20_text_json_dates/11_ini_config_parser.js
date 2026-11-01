// INI and key=value parsing with sections and typed values.
const ini = `; comment
name = demo
[server]
host=localhost
port = 8080
debug = true
[paths]
root = /var/www
ratio=0.75
empty=`;
const conv = (v) => (v === "true" ? true : v === "false" ? false : v !== "" && !isNaN(v) ? +v : v);
const parse = (s) => { const r = {}; let c = r; for (const l of s.split("\n").map((x) => x.trim())) { if (!l || l[0] === ";") continue; const m = /^\[(.+)\]$/.exec(l); if (m) c = r[m[1]] = {}; else { const [k, ...v] = l.split("="); c[k.trim()] = conv(v.join("=").trim()); } } return r; };
console.log(parse(ini));
const dump = (o) => { const top = Object.entries(o).filter(([, v]) => typeof v !== "object").map(([k, v]) => `${k}=${v}`), sec = Object.entries(o).filter(([, v]) => typeof v === "object").map(([k, v]) => `[${k}]\n${dump(v)}`); return [...top, ...sec].join("\n"); }; console.log(dump(parse(ini)));
