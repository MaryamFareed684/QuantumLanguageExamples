// Everything that consumes iterables.
function* g() { yield ["a", 1]; yield ["b", 2]; }
console.log([...g()], Array.from(g()), new Map(g()), new Set(g()).size, Object.fromEntries(g()));
const [p, q] = g(); console.log(p, q);
console.log(Math.max(...[1, 2].values()), [...new Map([[1, 2]]).keys()], [...new Set("aab")], [..."hi"].entries().next());
console.log(Array.from(new Map([[1, 2]]).entries()), Array.from("ab", (c) => c + c), Array.from([1, 2].values(), (x) => x * 2));
Promise.all(g()).then((v) => console.log(v));
function f(...a) { return a.length; } console.log(f(...g()), f(..."abc"));
