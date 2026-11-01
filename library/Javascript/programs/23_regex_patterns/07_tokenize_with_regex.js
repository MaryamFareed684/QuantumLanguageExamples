// A sticky-flag tokenizer and a template tag scanner.
const spec = [["num", /\d+(\.\d+)?/y], ["id", /[a-z_]\w*/iy], ["str", /"(?:[^"\\]|\\.)*"/y], ["op", /[-+*/=<>!]=?|[(){},;]/y], ["ws", /\s+/y]];
function lex(s) { const o = []; let i = 0; outer: while (i < s.length) { for (const [t, r] of spec) { r.lastIndex = i; const m = r.exec(s); if (m) { if (t !== "ws") o.push(`${t}:${m[0]}`); i = r.lastIndex; continue outer; } } throw new SyntaxError(`bad char ${s[i]} at ${i}`); } return o; }
console.log(lex('let x1 = 3.14 * (y + "a\\"b"); if (x1 >= 2) {}')); try { lex("a @ b"); } catch (e) { console.log(e.message); }
console.log([..."<b>bold</b> and <i class='x'>it</i>".matchAll(/<(\/?)(\w+)([^>]*)>/g)].map((m) => [m[1] ? "close" : "open", m[2], m[3].trim()]));
