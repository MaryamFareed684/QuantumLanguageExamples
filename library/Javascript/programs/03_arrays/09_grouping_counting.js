// Grouping and counting with reduce and Object.groupBy-style helpers.
const words = ["apple", "avocado", "bean", "beet", "carrot", "corn", "date"];
const groupBy = (xs, f) => xs.reduce((m, x) => ((m[f(x)] ||= []).push(x), m), {});
console.log(groupBy(words, (w) => w[0]), groupBy([1, 2, 3, 4, 5], (n) => (n % 2 ? "odd" : "even")));
const tally = (xs) => xs.reduce((m, x) => ((m[x] = (m[x] || 0) + 1), m), {});
console.log(tally([..."mississippi"]), tally(words.map((w) => w.length)));
const partition = (xs, f) => xs.reduce(([t, u], x) => (f(x) ? [[...t, x], u] : [t, [...u, x]]), [[], []]);
console.log(partition([1, 2, 3, 4], (n) => n > 2));
