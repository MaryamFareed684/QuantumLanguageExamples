// A small parser reporting line and column of errors.
class ParseError extends Error { constructor(m, line, col) { super(`${m} at ${line}:${col}`); this.name = "ParseError"; Object.assign(this, { line, col }); } }
function parseKV(src) {
  const out = {};
  src.split("\n").forEach((l, i) => {
    if (!l.trim() || l.startsWith("#")) return;
    const c = l.indexOf("=");
    if (c < 0) throw new ParseError("expected =", i + 1, l.length + 1);
    const k = l.slice(0, c).trim();
    if (!/^\w+$/.test(k)) throw new ParseError("bad key", i + 1, 1);
    out[k] = l.slice(c + 1).trim();
  });
  return out;
}
console.log(parseKV("a=1\n# c\n\nb = two words"));
for (const s of ["a=1\nbroken", "bad key=1"]) { try { parseKV(s); } catch (e) { console.log(e.name, e.message, e.line, e.col); } }
