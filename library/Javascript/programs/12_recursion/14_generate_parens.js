// Balanced parentheses, and Catalan numbers.
const gen = (n, s = "", o = 0, c = 0) => (s.length === 2 * n ? [s] : [...(o < n ? gen(n, s + "(", o + 1, c) : []), ...(c < o ? gen(n, s + ")", o, c + 1) : [])]);
console.log(gen(3), [1, 2, 3, 4, 5, 6, 7].map((n) => gen(n).length));
const cat = (n) => { if (n <= 1) return 1; let s = 0; for (let i = 0; i < n; i++) s += cat(i) * cat(n - 1 - i); return s; };
console.log([...Array(12).keys()].map(cat));
