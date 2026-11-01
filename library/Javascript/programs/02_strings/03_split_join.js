// split with separators, limits and regexes; join and repeat.
console.log("a,b,,c".split(","), "a,b,c".split(",", 2), "abc".split(""), "".split(","), "".split(""));
console.log("one  two   three".split(" "), "one  two   three".split(/\s+/), "a1b22c".split(/\d+/), "a1b2".split(/(\d)/));
console.log(["x", 1, null, undefined, [2, 3]].join("-"), [].join(), [1].join("+"), [1, 2].join(""), [[1, 2], [3]].join(";"));
console.log("ab".repeat(3), "x".repeat(0) === "", "-=".repeat(5) + "-");
const words = "red green blue".split(" ");
console.log(words.reverse().join(" "), [..."stressed"].reverse().join(""));
console.log("2024-03-15".split("-").map(Number), "k=v=w".split("=", 2));
