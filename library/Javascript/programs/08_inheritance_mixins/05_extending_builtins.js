// Subclassing Array, Error and Map.
class Stack extends Array {
  peek() { return this[this.length - 1]; }
  static get [Symbol.species]() { return Array; }
}
const s = new Stack(); s.push(1, 2);
console.log(s, s.peek(), s.length, s instanceof Array, Array.isArray(s), s.map((x) => x) instanceof Stack);
class Sorted extends Array { insert(v) { this.push(v); this.sort((a, b) => a - b); return this; } }
const o = new Sorted().insert(3).insert(1);
console.log(o, o.map((x) => x + 1) instanceof Sorted, o.filter(Boolean).constructor.name, Sorted.from([1]).constructor.name, Sorted.of(1) instanceof Sorted);
class DMap extends Map { get(k, d) { return this.has(k) ? super.get(k) : d; } }
console.log(new DMap([["a", 1]]).get("a"), new DMap().get("z", 0), new DMap([["a", 1]]));
class Str extends String { shout() { return this.toUpperCase() + "!"; } } console.log(new Str("hi").shout(), new Str("hi").length, new Str("hi"));
