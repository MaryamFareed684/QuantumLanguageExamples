// Sorting records by multiple keys and comparator combinators.
const by = (...k) => (a, b) => { for (let f of k) { let s = 1; if (f[0] === "-") { s = -1; f = f.slice(1); } if (a[f] < b[f]) return -s; if (a[f] > b[f]) return s; } return 0; };
const r = [{ n: "al", a: 30, c: "x" }, { n: "bo", a: 25, c: "y" }, { n: "cy", a: 30, c: "y" }, { n: "di", a: 25, c: "x" }];
console.log(r.toSorted(by("a", "n")).map((x) => x.n), r.toSorted(by("-a", "c")).map((x) => x.n), r.toSorted(by("c", "-n")).map((x) => x.n));
const on = (f) => (a, b) => f(a) - f(b), rev = (c) => (a, b) => c(b, a);
console.log(["ccc", "a", "bb"].sort(on((s) => s.length)), ["ccc", "a", "bb"].sort(rev(on((s) => s.length))), [3, 1, 2].sort(rev((a, b) => a - b)));
