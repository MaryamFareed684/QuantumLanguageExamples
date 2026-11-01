// push, pop, shift, unshift, splice, reverse, fill, copyWithin.
const a = [1, 2, 3, 4, 5];
console.log(a.push(6, 7), a.pop(), a.shift(), a.unshift(0, 1), a);
console.log(a.splice(1, 2), a, a.splice(1, 0, "x", "y"), a, a.splice(-1), a, a.splice(1, 1, "z"), a);
console.log([1, 2, 3].reverse(), [1, 2, 3].fill(0), [1, 2, 3, 4].fill(9, 1, 3), new Array(3).fill("k"));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3), [1, 2, 3, 4, 5].copyWithin(1, 0, 2));
const b = [3, 1, 2];
console.log(b.sort() === b, b.reverse() === b, b);
b.length = 1; console.log(b); b.length = 3; console.log(b);
