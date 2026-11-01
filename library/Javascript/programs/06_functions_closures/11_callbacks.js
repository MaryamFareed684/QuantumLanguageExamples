// Callback style: passing behaviour, error-first conventions.
const mapErr = (xs, f, done) => {
  const out = [];
  for (const x of xs) { const [e, v] = f(x); if (e) return done(e); out.push(v); }
  done(null, out);
};
const half = (n) => (n % 2 ? [new Error(n + " is odd")] : [null, n / 2]);
const report = (e, r) => console.log(e ? "error: " + e.message : r);
mapErr([2, 4], half, report);
mapErr([2, 3, 4], half, report);
[3, 1, 2].sort((a, b) => a - b).forEach(function (x, i, arr) { console.log(x, i, arr.length, this.tag); }, { tag: "T" });
function each(o, cb) { for (const k of Object.keys(o)) if (cb(k, o[k]) === false) break; }
each({ a: 1, b: 2, c: 3 }, (k, v) => { console.log(k, v); return v < 2; });
