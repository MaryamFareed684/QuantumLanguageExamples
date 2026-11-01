// Lexical scope, shadowing, globals and globalThis.
var gv = "var";
globalThis.g2 = "global";
const scope = "outer";
function a() { const scope = "a"; function b() { return scope; } return b; }
function c() { return scope; }
console.log(a()(), c(), g2, typeof gv, typeof globalThis, this === module.exports, typeof require, typeof module);
if (true) { let scope = "block"; console.log(scope); }
try { (function () { "use strict"; undeclared = 1; })(); } catch (e) { console.log(e.name + ": " + e.message); }
(function () { implicit = 1; })();
console.log(implicit, delete globalThis.implicit, typeof implicit);
console.log(typeof process, typeof console.log, typeof setTimeout, process.argv.length >= 2, typeof __filename, typeof __dirname);
