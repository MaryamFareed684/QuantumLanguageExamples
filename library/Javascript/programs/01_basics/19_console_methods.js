// console.log formatting of values and format specifiers.
console.log("%s is %d years and %i, %f, %j %o %%", "Al", 42.5, 42.5, "1.5", 1, [1]);
console.log(1, "a", true, null, undefined, 1.5, -0, 0, NaN, Infinity);
console.log(["a", 1, null, undefined, true, [2, [3]], { k: "v" }]);
console.log({ s: "str", n: 1, f() {}, g: () => 1, a: [], o: {}, d: new Date(0), r: /x/g, e: null });
console.log([undefined, , 3], new Array(3), [1, 2, 3].length, "multi\nline", ["multi\nline"], 'q"uote', ["q\"uote", "it's"]);
console.log(Symbol("s"), 10n, [10n], function named() {}, class K {}, class extends Array {}, () => {});
console.info("info"); console.debug("debug");
