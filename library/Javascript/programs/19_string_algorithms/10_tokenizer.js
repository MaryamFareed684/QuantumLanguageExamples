// A tokenizer and a tiny JSON parser written by hand.
function parse(s) {
  let i = 0;
  const ws = () => { while (/\s/.test(s[i] ?? "")) i++; }, err = (m) => { throw new SyntaxError(`${m} at ${i}`); };
  const val = () => { ws(); const c = s[i]; if (c === "{") return obj(); if (c === "[") return arr(); if (c === '"') return str(); if (s.startsWith("true", i)) { i += 4; return true; } if (s.startsWith("false", i)) { i += 5; return false; } if (s.startsWith("null", i)) { i += 4; return null; } const m = /^-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(s.slice(i)); if (!m) err("unexpected " + c); i += m[0].length; return +m[0]; };
  const str = () => { let o = ""; i++; while (s[i] !== '"') { if (i >= s.length) err("unterminated"); if (s[i] === "\\") { i++; const e = s[i]; if (e === "u") { o += String.fromCharCode(parseInt(s.slice(i + 1, i + 5), 16)); i += 4; } else o += { n: "\n", t: "\t", '"': '"', "\\": "\\" }[e] ?? e; } else o += s[i]; i++; } i++; return o; };
  const arr = () => { const a = []; i++; ws(); if (s[i] === "]") { i++; return a; } for (;;) { a.push(val()); ws(); if (s[i] === ",") { i++; continue; } if (s[i] === "]") { i++; return a; } err("expected ,"); } };
  const obj = () => { const o = {}; i++; ws(); if (s[i] === "}") { i++; return o; } for (;;) { ws(); const k = str(); ws(); if (s[i++] !== ":") err("expected :"); o[k] = val(); ws(); if (s[i] === ",") { i++; continue; } if (s[i] === "}") { i++; return o; } err("expected ,"); } };
  const r = val(); ws(); if (i < s.length) err("trailing"); return r;
}
const src = '{"a":[1,2.5,-3e2,{"b":null}],"s":"t\\n\\u0041","t":true,"f":false,"e":{},"l":[]}';
console.log(parse(src), JSON.stringify(parse(src)) === JSON.stringify(JSON.parse(src)));
for (const b of ["[1,", '{"a"}', "tru", "[1] x", '"open']) { try { parse(b); } catch (e) { console.log(e.name, e.message); } }
