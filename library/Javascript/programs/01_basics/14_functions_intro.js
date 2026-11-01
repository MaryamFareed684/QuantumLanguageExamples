// Declarations, expressions, arrows, defaults, rest and hoisting.
console.log(hoisted(2));
function hoisted(n) { return n * 2; }
const expr = function (n) { return n + 1; };
const arrow = (a, b = a * 2, ...more) => [a, b, more];
console.log(expr(1), arrow(1), arrow(1, 5), arrow(1, 5, 6, 7));
function noReturn() {}
console.log(noReturn(), hoisted.name, expr.name, arrow.name, arrow.length, hoisted.length);
function count() { return arguments.length; }
console.log(count(), count(1, 2, 3), count(...[1, 2]));
console.log(((n) => n * n)(5), (function () { return "iife"; })());
