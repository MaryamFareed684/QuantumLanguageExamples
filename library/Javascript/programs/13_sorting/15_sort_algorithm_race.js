// Counting comparisons across algorithms on the same data.
let s = 99; const data = Array.from({ length: 2000 }, () => (s = (s * 69069 + 1) % 4294967296) % 100000);
const race = (f) => { let c = 0; const r = f([...data], (a, b) => (c++, a - b)); return [c, r.every((v, i) => !i || r[i - 1] <= v)]; };
const ins = (a, cmp) => { for (let i = 1; i < a.length; i++) { const v = a[i]; let j = i - 1; while (j >= 0 && cmp(a[j], v) > 0) { a[j + 1] = a[j]; j--; } a[j + 1] = v; } return a; };
const mer = (a, cmp) => { if (a.length < 2) return a; const m = a.length >> 1, l = mer(a.slice(0, m), cmp), r = mer(a.slice(m), cmp), o = []; let i = 0, j = 0; while (i < l.length && j < r.length) o.push(cmp(l[i], r[j]) <= 0 ? l[i++] : r[j++]); return o.concat(l.slice(i), r.slice(j)); };
const hp = (a, cmp) => { const sift = (i, n) => { for (;;) { let m = i, l = 2 * i + 1, r = l + 1; if (l < n && cmp(a[l], a[m]) > 0) m = l; if (r < n && cmp(a[r], a[m]) > 0) m = r; if (m === i) return; [a[i], a[m]] = [a[m], a[i]]; i = m; } }; for (let i = (a.length >> 1) - 1; i >= 0; i--) sift(i, a.length); for (let n = a.length - 1; n > 0; n--) { [a[0], a[n]] = [a[n], a[0]]; sift(0, n); } return a; };
console.log("ins", race(ins), "mer", race(mer), "heap", race(hp));
