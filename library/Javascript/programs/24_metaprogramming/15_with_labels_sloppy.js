// Sloppy-mode relics: with, arguments.callee, implicit globals.
const o = { a: 1, b: 2 }; with (o) { console.log(a + b); var viaWith = a; a = 5; } console.log(viaWith, o.a);
function f() { return arguments.callee === f; } console.log(f(), f.caller === null || typeof f.caller);
function dup(a, a) { return a; } console.log(dup(1, 2)); console.log(010, 0o10, "\101", typeof null, 08);
label: { console.log("in"); if (o) break label; console.log("skip"); } console.log(typeof undefined_var, void "x");
var v = 1; var v = 2; function h() {} var h; console.log(v, typeof h); { function blockFn() { return 1; } } console.log(typeof blockFn);
console.log(delete o.a, delete o, typeof o, (function () { return typeof this; })(), (function () { "use strict"; return typeof this; })());
console.log(new Boolean(false) ? "truthy" : "falsy", NaN != NaN, null == 0, null >= 0, undefined == 0, [] == ![], "b" + "a" + +"a" + "a", [10, 1, 3].sort(), 0.1 * 3, 9007199254740992 + 1, Math.min() > Math.max(), [1, 2, 3] + [4], {} + [], typeof NaN);
