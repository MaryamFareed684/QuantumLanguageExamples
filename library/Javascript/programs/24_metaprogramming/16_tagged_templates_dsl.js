// DSLs with tagged templates: SQL, HTML, and cached strings.
const sql = (s, ...v) => ({ text: s.reduce((a, x, i) => a + "$" + i + x), values: v }); console.log(sql`SELECT * FROM t WHERE a=${1} AND b=${"x"}`);
const esc = (x) => String(x).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])), html = (s, ...v) => s.reduce((a, x, i) => a + esc(v[i - 1]) + x); console.log(html`<p>${"<b>"} & ${1 + 1}</p>`);
const seen = []; const id = (s) => (seen.push(s), s); const f = () => id`same${1}`; f(); f(); console.log(seen[0] === seen[1], Object.isFrozen(seen[0]), Array.isArray(seen[0].raw), seen[0], seen[0].raw);
const dedent = (s, ...v) => { const t = s.reduce((a, x, i) => a + v[i - 1] + x); const m = Math.min(...t.split("\n").filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length)); return t.split("\n").map((l) => l.slice(m)).join("\n").trim(); }; console.log(dedent`
      one
        two ${"v"}
      three`); console.log(((s) => s.raw[0])`a\nb`, ((s) => s[0])`a\nb`, ((s) => s[0])`\u{110000}` === undefined);
