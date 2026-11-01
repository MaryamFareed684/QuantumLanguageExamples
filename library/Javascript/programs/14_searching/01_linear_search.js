// Linear search variants: first, last, all, with sentinels.
const a = [4, 2, 7, 2, 9, 2];
const first = (x, t) => { for (let i = 0; i < x.length; i++) if (x[i] === t) return i; return -1; };
const last = (x, t) => { for (let i = x.length - 1; i >= 0; i--) if (x[i] === t) return i; return -1; };
const all = (x, t) => x.reduce((o, v, i) => (v === t ? [...o, i] : o), []);
console.log(first(a, 2), last(a, 2), all(a, 2), first(a, 5), all(a, 5));
const sentinel = (x, t) => { const c = [...x, t]; let i = 0; while (c[i] !== t) i++; return i === x.length ? -1 : i; };
console.log(sentinel(a, 9), sentinel(a, 3));
