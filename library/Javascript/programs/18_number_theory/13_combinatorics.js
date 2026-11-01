// Permutations, combinations, stars-and-bars and derangements.
const nCr = (n, r) => { if (r < 0 || r > n) return 0n; let a = 1n; for (let i = 1n; i <= BigInt(r); i++) a = (a * (BigInt(n) - i + 1n)) / i; return a; };
const nPr = (n, r) => { let a = 1; for (let i = 0; i < r; i++) a *= n - i; return a; };
console.log(nCr(5, 2), nCr(52, 5), nCr(100, 50), nPr(5, 2), nPr(10, 3), nCr(5, 9), nCr(10, 0), nCr(30, 3) + nCr(30, 4));
const der = (n) => { let a = 1, b = 0; for (let i = 2; i <= n; i++) [a, b] = [b, (i - 1) * (a + b)]; return n === 0 ? 1 : b; }; console.log([0, 1, 2, 3, 4, 5, 6, 10].map(der));
const bell = (n) => { let r = [1]; for (let i = 0; i < n; i++) { const c = [r.at(-1)]; for (const v of r) c.push(c.at(-1) + v); r = c; } return r[0]; }; console.log([0, 1, 2, 3, 4, 5, 6].map(bell));
const nextP = (a) => { a = [...a]; let i = a.length - 2; while (i >= 0 && a[i] >= a[i + 1]) i--; if (i < 0) return a.reverse(); let j = a.length - 1; while (a[j] <= a[i]) j--; [a[i], a[j]] = [a[j], a[i]]; return [...a.slice(0, i + 1), ...a.slice(i + 1).reverse()]; }; console.log(nextP([1, 2, 3]), nextP([3, 2, 1]), nextP([1, 3, 2]));
