// Currying and partial application.
const curry = (f) => function c(...a) { return a.length >= f.length ? f(...a) : (...b) => c(...a, ...b); };
const add3 = curry((a, b, c) => a + b + c);
console.log(add3(1)(2)(3), add3(1, 2)(3), add3(1)(2, 3), add3(1, 2, 3));
const partial = (f, ...a) => (...b) => f(...a, ...b);
console.log(partial(Math.max, 5)(1, 9), partial((x, y) => x - y, 10)(3));
const flip = (f) => (a, b) => f(b, a);
console.log(flip((a, b) => a / b)(2, 10), add3.length, add3.name);
const mult = (a) => (b) => a * b;
console.log([1, 2, 3].map(mult(3)));
