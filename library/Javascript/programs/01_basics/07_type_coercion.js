// The rules of == , + and truthiness, shown by example.
const pairs = [[0, ""], [0, "0"], ["", "0"], [null, undefined], [null, 0], [NaN, NaN], [[], false], [[1], 1], ["1", 1]];
for (const [a, b] of pairs) {
  console.log(JSON.stringify(a), "==", JSON.stringify(b), a == b, "===", a === b);
}
console.log(1 + "2", "3" * "4", "5" - 2, true + 1, [] + [], [] + {}, 1 + null, 1 + undefined);
for (const v of [0, -0, "", " ", "0", null, undefined, NaN, [], {}, 1n, 0n]) {
  console.log(typeof v, Boolean(v) ? "truthy" : "falsy");
}
console.log(Number(""), Number(" 12 "), Number("1e3"), Number("abc"), Number(null), Number(undefined), Number(true), Number([5]));
console.log(String(null), String(undefined), String(123), String([1, 2]), String({}), `${[1, [2, 3]]}`);
