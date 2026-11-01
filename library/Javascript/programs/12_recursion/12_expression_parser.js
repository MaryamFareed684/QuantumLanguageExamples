// Recursive-descent arithmetic parser and evaluator.
function evaluate(src) {
  let i = 0;
  const peek = () => src[i], eat = () => src[i++], ws = () => { while (src[i] === " ") i++; };
  function expr() { let v = term(); for (ws(); peek() === "+" || peek() === "-"; ws()) v = eat() === "+" ? v + term() : v - term(); return v; }
  function term() { let v = pow(); for (ws(); peek() === "*" || peek() === "/" || peek() === "%"; ws()) { const o = eat(); const r = pow(); v = o === "*" ? v * r : o === "/" ? v / r : v % r; } return v; }
  function pow() { const b = atom(); ws(); if (peek() === "^") { eat(); return b ** pow(); } return b; }
  function atom() { ws(); if (peek() === "(") { eat(); const v = expr(); ws(); if (eat() !== ")") throw new SyntaxError("expected )"); return v; } if (peek() === "-") { eat(); return -atom(); } const m = /^\d+(\.\d+)?/.exec(src.slice(i)); if (!m) throw new SyntaxError(`bad char ${peek()} at ${i}`); i += m[0].length; return +m[0]; }
  const r = expr(); ws(); if (i < src.length) throw new SyntaxError("trailing " + src.slice(i)); return r;
}
for (const e of ["1 + 2 * 3", "(1+2)*3", "2^3^2", "-4 + 10 / 4", "7 % 3 * 2", "1 +", "(1", "2 2"]) { try { console.log(e, "=", evaluate(e)); } catch (x) { console.log(e, x.name, x.message); } }
