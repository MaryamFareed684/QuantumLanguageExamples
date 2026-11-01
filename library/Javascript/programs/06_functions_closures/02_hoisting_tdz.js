// var hoisting, function hoisting and the temporal dead zone.
console.log(v, typeof notDeclared, f1());
var v = 1;
function f1() { return "hoisted"; }
try { console.log(l); } catch (e) { console.log(e.name + ": " + e.message); }
let l = 2;
try { fe(); } catch (e) { console.log(e.name + ": " + e.message); }
var fe = function () {};
{ let block = 1; var fnScoped = 2; }
console.log(typeof block, fnScoped);
function shadow() { console.log(x); var x = 5; return x; }
var x = 1;
console.log(shadow(), x);
try { const c = 1; c = 2; } catch (e) { console.log(e.name + ": " + e.message); }
