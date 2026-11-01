// Dispatch tables and a tiny calculator.
const ops = { "+": (a, b) => a + b, "-": (a, b) => a - b, "*": (a, b) => a * b, "/": (a, b) => { if (b === 0) throw new Error("div by zero"); return a / b; }, "^": Math.pow };
const prec = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
function evalRpn(toks) {
  const st = [];
  for (const t of toks) { if (t in ops) { const b = st.pop(), a = st.pop(); st.push(ops[t](a, b)); } else st.push(+t); }
  return st[0];
}
function toRpn(expr) {
  const out = [], st = [];
  for (const t of expr.match(/\d+|[-+*/^()]/g)) {
    if (/\d/.test(t)) out.push(t);
    else if (t === "(") st.push(t);
    else if (t === ")") { while (st.at(-1) !== "(") out.push(st.pop()); st.pop(); }
    else { while (st.length && st.at(-1) !== "(" && (prec[st.at(-1)] > prec[t] || (prec[st.at(-1)] === prec[t] && t !== "^"))) out.push(st.pop()); st.push(t); }
  }
  return out.concat(st.reverse());
}
for (const e of ["1+2*3", "(1+2)*3", "2^3^2", "10/4-1"]) console.log(e, toRpn(e).join(" "), evalRpn(toRpn(e)));
try { evalRpn(toRpn("1/0")); } catch (e) { console.log(e.message); }
