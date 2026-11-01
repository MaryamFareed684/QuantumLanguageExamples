// Array-likes, arguments and Array.prototype borrowing.
function args() { return [Array.isArray(arguments), arguments.length, Array.from(arguments), [...arguments], typeof arguments]; }
console.log(args(1, "b"));
const like = { 0: "a", 1: "b", length: 2 };
console.log(Array.from(like), Array.prototype.map.call(like, (x) => x + x), Array.prototype.join.call(like, "+"), Array.prototype.slice.call("xyz"));
console.log(Array.isArray([]), Array.isArray({ length: 0 }), [].concat(like).length);
const arr = [1, 2]; arr.extra = "prop";
console.log(arr, arr.length, Object.keys(arr), JSON.stringify(arr));
for (const i in arr) console.log(i);
console.log(typeof [], [] instanceof Object, [].constructor === Array, Object.prototype.toString.call([]));
