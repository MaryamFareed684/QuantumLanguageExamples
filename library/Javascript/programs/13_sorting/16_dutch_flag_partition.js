// Dutch national flag, stable partition and moving zeros.
const flag = (a) => { let l = 0, m = 0, h = a.length - 1; while (m <= h) { if (a[m] === 0) { [a[l], a[m]] = [a[m], a[l]]; l++; m++; } else if (a[m] === 1) m++; else { [a[m], a[h]] = [a[h], a[m]]; h--; } } return a; };
console.log(flag([2, 0, 2, 1, 1, 0]), flag([1]), flag([]));
const zeros = (a) => { let w = 0; for (const x of a) if (x) a[w++] = x; a.fill(0, w); return a; }; console.log(zeros([0, 1, 0, 3, 12]));
const stable = (a, f) => [...a.filter(f), ...a.filter((x) => !f(x))]; console.log(stable([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0));
