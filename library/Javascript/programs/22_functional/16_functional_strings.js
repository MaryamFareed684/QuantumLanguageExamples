// String processing as function pipelines.
const pipe = (...f) => (x) => f.reduce((v, g) => g(v), x); const words = (s) => s.split(/\s+/).filter(Boolean), cap = (w) => w[0].toUpperCase() + w.slice(1), mapW = (f) => (s) => words(s).map(f).join(" "), freq = (a) => a.reduce((m, w) => m.set(w, (m.get(w) ?? 0) + 1), new Map()), top = (n) => (m) => [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n);
const T = "the cat and the dog and the bird"; console.log(mapW(cap)(T), pipe(words, freq, top(2))(T), pipe(mapW((w) => [...w].reverse().join("")), (s) => s.length)(T));
const isPal = pipe((s) => s.toLowerCase(), (s) => s.replace(/\W/g, ""), (s) => s === [...s].reverse().join("")); console.log(isPal("Never odd or even"), isPal("abc"));
const caesar = (k) => (s) => s.replace(/[a-z]/g, (c) => String.fromCharCode(((c.charCodeAt(0) - 97 + k) % 26) + 97)); console.log(pipe(caesar(3), caesar(23))("round trip"), [1, 2, 3].map(caesar).map((f) => f("a")));
