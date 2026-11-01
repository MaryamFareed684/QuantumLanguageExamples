// find, findIndex, findLast, some, every, includes, indexOf.
const a = [4, 9, 16, 25, NaN, 9];
console.log(a.find((x) => x > 5), a.findIndex((x) => x > 5), a.findLast((x) => x < 20), a.findLastIndex((x) => x === 9), a.find((x) => x > 99));
console.log(a.some((x) => x > 20), a.every((x) => x > 3), [].some(() => true), [].every(() => false));
console.log(a.indexOf(9), a.lastIndexOf(9), a.indexOf(NaN), a.includes(NaN), a.includes(16, 3), a.includes(4, 1), [0].includes(-0));
console.log([1, 2, 3].at(0), [1, 2, 3].at(-1), [1, 2, 3].at(5), [[1], [2]].indexOf([1]));
