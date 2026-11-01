// Objects from factory functions with private state.
function counter(start = 0) {
  let n = start;
  return { inc: () => ++n, dec: () => --n, get value() { return n; }, reset() { n = start; return this; } };
}
const a = counter(), b = counter(10);
a.inc(); a.inc(); b.dec();
console.log(a.value, b.value, a.reset().value, a.n, a);
function stack() {
  const items = [];
  return Object.freeze({ push: (x) => (items.push(x), items.length), pop: () => items.pop(), size: () => items.length, toString: () => `[${items}]` });
}
const s = stack(); s.push(1); s.push(2);
console.log(`${s}`, s.pop(), s.size(), String(s));
