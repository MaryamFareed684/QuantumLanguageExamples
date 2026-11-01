// Goldbach partitions, twin primes and prime gaps.
const N = 2000, s = new Uint8Array(N + 1); for (let i = 2; i * i <= N; i++) if (!s[i]) for (let j = i * i; j <= N; j += i) s[j] = 1; const isP = (n) => n > 1 && !s[n];
const gold = (n) => { for (let p = 2; p <= n / 2; p++) if (isP(p) && isP(n - p)) return [p, n - p]; }; console.log([4, 6, 28, 100, 1000].map(gold));
const P = []; for (let i = 2; i <= N; i++) if (isP(i)) P.push(i); console.log(P.filter((p) => isP(p + 2)).slice(0, 10).map((p) => [p, p + 2]));
const gaps = P.slice(1).map((p, i) => p - P[i]); console.log(Math.max(...gaps), P[gaps.indexOf(Math.max(...gaps))], P.length);
console.log(P.filter((p) => { const r = +[...String(p)].reverse().join(""); return r !== p && isP(r); }).slice(0, 10));
