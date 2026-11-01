// Combinations, permutations and power sets as generators.
function* combos(a, k, s = 0, p = []) { if (p.length === k) { yield [...p]; return; } for (let i = s; i < a.length; i++) { p.push(a[i]); yield* combos(a, k, i + 1, p); p.pop(); } }
function* perm(a, p = []) { if (!a.length) yield p; a.forEach((x, i) => { }); for (let i = 0; i < a.length; i++) yield* perm([...a.slice(0, i), ...a.slice(i + 1)], [...p, a[i]]); }
function* power(a) { for (let m = 0; m < 1 << a.length; m++) yield a.filter((_, i) => m & (1 << i)); }
console.log([...combos("abcd", 2)].map((x) => x.join("")).join(" "), [...perm([1, 2, 3])].length, [...perm("ab".split(""))], [...power([1, 2, 3])]);
const sum = (it) => { let s = 0; for (const v of it) s += v.reduce((a, b) => a + b, 0); return s; };
console.log(sum(combos([1, 2, 3, 4, 5], 3)));
