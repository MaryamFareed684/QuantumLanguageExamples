// Function composition and pipelines.
const compose = (...f) => (x) => f.reduceRight((v, g) => g(v), x);
const pipe = (...f) => (x) => f.reduce((v, g) => g(v), x);
const inc = (x) => x + 1, dbl = (x) => x * 2, sq = (x) => x * x;
console.log(compose(inc, dbl, sq)(3), pipe(inc, dbl, sq)(3), compose()(7), pipe(String, (s) => s.padStart(3, "0"))(7));
const slug = pipe((s) => s.trim(), (s) => s.toLowerCase(), (s) => s.replace(/\s+/g, "-"), (s) => s.replace(/[^a-z0-9-]/g, ""));
console.log(slug("  Hello, Big World!  "));
const tap = (f) => (x) => (f(x), x);
console.log(pipe(inc, tap(console.log), dbl)(1));
