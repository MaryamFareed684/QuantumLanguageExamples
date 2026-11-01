// Sparse arrays: holes, length and how iteration treats them.
const a = [1, , 3];
console.log(a, a.length, 1 in a, a[1], Object.keys(a));
console.log(a.map((x) => x * 2), a.filter(() => true), a.flat());
a.forEach((x, i) => console.log("forEach", i, x));
for (const x of a) console.log("of", x);
for (const i in a) console.log("in", i);
const b = []; b[3] = "x"; console.log(b, b.length, b.join("-"));
delete b[3]; console.log(b, b.length);
console.log(new Array(2), new Array(2, 3), Array(3).join("x"), [...Array(2)], Array.from(Array(2)), Array(3).fill().map((_, i) => i));
console.log([, ,].length, [, , 1], JSON.stringify([, 1]));
