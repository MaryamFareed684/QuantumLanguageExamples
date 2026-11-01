// Generators as state machines: lexer tokens and running totals.
function* lexer(s) {
  let i = 0;
  while (i < s.length) {
    if (/\s/.test(s[i])) { i++; continue; }
    if (/\d/.test(s[i])) { let j = i; while (/\d/.test(s[j] ?? "")) j++; yield { t: "num", v: +s.slice(i, j) }; i = j; continue; }
    if (/[a-z]/i.test(s[i])) { let j = i; while (/\w/.test(s[j] ?? "")) j++; yield { t: "id", v: s.slice(i, j) }; i = j; continue; }
    yield { t: "op", v: s[i++] };
  }
}
console.log([...lexer("x1 = 42 + (y*3)")].map((k) => `${k.t}:${k.v}`).join(" "));
function* totals() { let s = 0, v; while ((v = yield s) !== undefined) s += v; return "final " + s; }
const t = totals(); t.next(); console.log(t.next(5).value, t.next(7).value, t.next());
