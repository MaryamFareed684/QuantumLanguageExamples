// arguments vs rest parameters; variadic helpers.
function sum() { let t = 0; for (let i = 0; i < arguments.length; i++) t += arguments[i]; return t; }
const sum2 = (...n) => n.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3), sum2(1, 2, 3), sum(), sum2());
function sloppy(a) { arguments[0] = 9; return a; }
function strict(a) { "use strict"; arguments[0] = 9; return a; }
console.log(sloppy(1), strict(1));
function outer() { const f = () => arguments[0]; return f(99); }
console.log(outer(1));
console.log(Math.max.apply(null, [1, 5, 2]), Array.prototype.concat.apply([], [[1], [2]]), String.fromCharCode.apply(null, [72, 105]));
