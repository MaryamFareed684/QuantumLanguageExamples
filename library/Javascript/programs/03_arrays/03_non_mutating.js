// slice, concat, flat, with, toSorted, toReversed, toSpliced.
const a = [3, 1, 2];
console.log(a.slice(), a.slice(1), a.slice(-1), a.slice(0, -1), a.concat(4, [5, [6]]));
console.log(a.toSorted(), a.toReversed(), a.with(0, 9), a.toSpliced(1, 1, "x"), a);
console.log([1, [2, [3, [4]]]].flat(), [1, [2, [3, [4]]]].flat(2), [1, [2, [3, [4]]]].flat(Infinity), [[], [[]]].flat());
console.log([1, 2].flatMap((x) => [x, x * 10]), ["a b", "c"].flatMap((s) => s.split(" ")), [1, 2].flatMap((x) => [[x]]));
console.log(Array.from("abc"), Array.from({ length: 3 }, (_, i) => i * i), Array.of(7, 8), Array.from(new Set([1, 1, 2])), Array.from(new Map([[1, 2]])));
