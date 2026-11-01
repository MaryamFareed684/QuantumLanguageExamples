// Comparing strings, sort orders and natural keys.
const names = ["bob", "Alice", "carol", "Dave", "alice", "10", "9", "Éa"];
console.log([...names].sort());
console.log([...names].sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0));
console.log([...names].sort((a, b) => a.length - b.length));
console.log(["a10", "a9", "a100", "b1"].sort((x, y) => {
  const [, p, n] = x.match(/([a-z]+)(\d+)/), [, q, m] = y.match(/([a-z]+)(\d+)/);
  return p === q ? n - m : p < q ? -1 : 1;
}));
console.log("apple" < "banana", "apple" < "Apple", "10" < "9", "abc" === "abc", "a" + "b" === "ab");
