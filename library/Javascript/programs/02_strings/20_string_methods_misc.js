// The rest of String.prototype: match, search, localeCompare, etc.
const s = "The Rain in SPAIN";
console.log(s.match(/ain/g), s.match(/ain/i).index, s.search(/in/), s.match(/zzz/));
console.log([...s.matchAll(/(a)(i)/gi)].map((m) => [m[0], m[1], m.index]));
console.log("a-b".concat("-c"), "abc".localeCompare("abd"), "abc".at(0), "tab\there".length, "nl\n".length);
console.log("%", "100%", "a\\b", 'single', "dq\"", `bq`, "\x41\u0042\103".length);
console.log("  x ".trim().length, "ABC".toLowerCase() === "abc", "abc".isWellFormed?.(), "abc".toString(), "abc".valueOf());
console.log(String(Symbol("d")), String(1n), [1, 2] + "", {} + "", (() => 1) + "", (function f(a) { return a; }) + "");
