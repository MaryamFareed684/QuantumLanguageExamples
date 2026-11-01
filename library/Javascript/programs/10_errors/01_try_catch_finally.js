// Control flow through try, catch and finally.
function f(mode) {
  try {
    if (mode === "throw") throw new Error("thrown");
    if (mode === "return") return "from try";
    return "normal";
  } catch (e) {
    return "caught " + e.message;
  } finally {
    console.log("finally for", mode);
  }
}
console.log(f("x"), f("throw"), f("return"));
function over() { try { return "try"; } finally { console.log("runs"); } }
function replace() { try { return "try"; } finally { return "finally wins"; } }
function swallow() { try { throw 1; } finally { return "swallowed"; } }
console.log(over(), replace(), swallow());
for (let i = 0; i < 2; i++) { try { if (i === 0) continue; console.log("body", i); } finally { console.log("loop finally", i); } }
try { try { throw new Error("in"); } finally { console.log("inner fin"); } } catch (e) { console.log("outer", e.message); }
