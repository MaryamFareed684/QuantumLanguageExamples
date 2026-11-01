// Arithmetic, bitwise, logical, nullish and optional-chaining operators.
console.log(7 + 2, 7 - 2, 7 * 2, 7 / 2, 7 % 2, -7 % 2, 2 ** 10, 2 ** -1);
console.log(5 & 3, 5 | 3, 5 ^ 3, ~5, 5 << 2, -20 >> 2, -20 >>> 28, 1 << 31, 1 << 32);
console.log(null ?? "d", 0 ?? "d", 0 || "d", "" && "x", 1 && 2, !0, !!"a");
let a = null, b = 0, c = 1;
a ??= 5; b ||= 6; c &&= 7;
console.log(a, b, c);
const user = { profile: { name: "Li", tags: ["x"] }, hi() { return "hi"; } };
console.log(user.profile?.name, user.nope?.name, user.profile?.tags?.[0], user.hi?.(), user.bye?.());
let i = 5;
console.log(i++, i, ++i, i--, --i);
console.log(typeof 1, typeof "", void 0, "a" in { a: 1 }, [] instanceof Array, (1, 2, 3));
console.log(1 < 2 < 3, 3 > 2 > 1, "b" > "a", "10" < "9", 10 < "9");
