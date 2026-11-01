// Maximum subarray sum, product and circular variants.
const kad = (a) => a.reduce(([b, c], x) => { c = Math.max(x, c + x); return [Math.max(b, c), c]; }, [-Infinity, 0])[0];
const prod = (a) => { let b = a[0], mx = a[0], mn = a[0]; for (const x of a.slice(1)) { const t = [x, mx * x, mn * x]; mx = Math.max(...t); mn = Math.min(...t); b = Math.max(b, mx); } return b; };
const circ = (a) => { const m = kad(a); if (m < 0) return m; const tot = a.reduce((x, y) => x + y); return Math.max(m, tot + kad(a.map((x) => -x))); };
console.log(kad([-2, 1, -3, 4, -1, 2, 1, -5, 4]), prod([2, 3, -2, 4]), prod([-2, 0, -1]), circ([5, -3, 5]), circ([-3, -2]));
const stock = (p) => p.reduce(([b, m], x) => [Math.max(b, x - m), Math.min(m, x)], [0, Infinity])[0]; console.log(stock([7, 1, 5, 3, 6, 4]), stock([7, 6, 4]));
