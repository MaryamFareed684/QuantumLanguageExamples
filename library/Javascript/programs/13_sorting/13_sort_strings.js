// String sorting: case, length, locale and natural order.
const w = ["pear", "Apple", "fig", "banana", "apple", "Fig", "éclair", "zoo"];
console.log([...w].sort(), [...w].sort((a, b) => a.localeCompare(b)), [...w].sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })));
console.log(["a10", "a2", "a1", "b1"].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })), new Intl.Collator("en").compare("a", "b"));
console.log([...w].sort((a, b) => a.length - b.length || (a < b ? -1 : 1)));
