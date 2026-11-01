// A printf-style formatter using rest params and replace.
function fmt(f, ...a) {
  let i = 0;
  return f.replace(/%([-0]?)(\d*)(?:\.(\d+))?([sdfx%])/g, (_, flag, w, p, t) => {
    if (t === "%") return "%";
    let v = a[i++];
    v = t === "d" ? String(Math.trunc(v)) : t === "f" ? Number(v).toFixed(p ?? 6) : t === "x" ? Number(v).toString(16) : String(v);
    return flag === "-" ? v.padEnd(+w) : v.padStart(+w, flag === "0" ? "0" : " ");
  });
}
console.log(fmt("%s has %d items at %.2f (%x) 100%%", "cart", 3.9, 2.5, 255));
console.log(fmt("[%5s][%-5s][%05d][%8.3f]", "a", "b", 42, Math.PI));
const util = require("util");
console.log(util.format("%s:%d:%j", "a", 1, { b: 2 }), util.inspect({ a: { b: { c: { d: 1 } } } }, { depth: 0 }), util.inspect("s"), util.isDeepStrictEqual([1], [1]));
