// Building big strings and comparing ways of concatenating.
let s = "";
for (let i = 0; i < 1000; i++) s += i % 10;
console.log(s.length, s.slice(0, 20), s.slice(-5));
const parts = [];
for (let i = 0; i < 5; i++) parts.push(`item${i}`);
console.log(parts.join(","), "a".concat("b", 1, null), [].concat("x", ["y"], [["z"]]));
console.log("abc" + 1 + 2, 1 + 2 + "abc", "abc" + (1 + 2), `${1}${2}`);
const huge = "ab".repeat(50000);
console.log(huge.length, huge.indexOf("ba"), huge.lastIndexOf("ab"), huge.split("a").length);
