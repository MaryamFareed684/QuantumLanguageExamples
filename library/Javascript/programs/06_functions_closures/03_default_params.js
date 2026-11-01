// Default parameters: evaluation time, scope and undefined.
function f(a, b = a + 1, c = () => a + b) { a = 10; return [a, b, c()]; }
console.log(f(1), f(1, 5), f(1, undefined), f(1, null));
let calls = 0;
const g = (v = ++calls) => v;
console.log(g(), g(), g(9), calls);
function h(a = 1, b) { return [a, b, arguments.length, h.length]; }
console.log(h(), h(undefined, 2));
const o = ({ a = 1, b: { c = 2 } = {} } = {}, [d = 3] = []) => [a, c, d];
console.log(o(), o({ a: 5, b: { c: 6 } }, [7]));
