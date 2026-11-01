// Grouping, sorting, zipping and pivoting with small utilities.
const sales = [{ y: 2023, q: 1, v: 10 }, { y: 2023, q: 2, v: 20 }, { y: 2024, q: 1, v: 30 }, { y: 2024, q: 2, v: 5 }];
const groupBy = (k) => (a) => a.reduce((m, r) => ({ ...m, [r[k]]: [...(m[r[k]] ?? []), r] }), {}), mapV = (f) => (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, f(v)])), sum = (k) => (a) => a.reduce((s, r) => s + r[k], 0), maxBy = (f) => (a) => a.reduce((m, x) => (f(x) > f(m) ? x : m));
console.log(mapV(sum("v"))(groupBy("y")(sales)), mapV((a) => a.map((r) => r.v))(groupBy("q")(sales)), maxBy((r) => r.v)(sales));
const transpose = (m) => m[0].map((_, i) => m.map((r) => r[i])), pivot = (a) => Object.fromEntries(Object.entries(groupBy("y")(a)).map(([y, r]) => [y, Object.fromEntries(r.map((x) => ["q" + x.q, x.v]))])); console.log(transpose([[1, 2], [3, 4], [5, 6]]), pivot(sales));
