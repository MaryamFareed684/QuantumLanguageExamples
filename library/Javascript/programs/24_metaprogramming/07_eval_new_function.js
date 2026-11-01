// eval, indirect eval and new Function scope rules.
var gv = "global"; const x = 1;
console.log(eval("x + 1"), eval("var ev = 5; ev * 2"), ev, (0, eval)("typeof x"), (0, eval)("1 + 1"), eval(5), eval("({a: 1})"), eval("[1, 2].length"), eval(""));
function f() { const local = 7; return [eval("local"), new Function("return typeof local")(), new Function("a", "b = 2", "...c", "return [a, b, c]")(1, undefined, 3)]; } console.log(f());
function s() { "use strict"; eval("var hid = 1"); return typeof hid; } console.log(s());
console.log(new Function("return this")() === globalThis, new Function().toString(), new Function("a,b", "return a").length, Function("return 1")(), eval("function ef() { return 'ef'; } ef()"), typeof ef);
try { eval("}"); } catch (e) { console.log(e.name, e.message); } try { new Function("return ]"); } catch (e) { console.log(e.name); } const k = "dyn"; console.log(eval("({[k]: 1})"), eval("`t${x}`"), eval("class Q { }; Q").name);
const vm = require("vm"); console.log(vm.runInNewContext("a + 1", { a: 1 }), vm.runInThisContext("1 + 2"), new vm.Script("2 * 3").runInThisContext());
