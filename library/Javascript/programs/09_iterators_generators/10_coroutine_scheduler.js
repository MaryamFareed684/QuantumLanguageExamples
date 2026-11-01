// Round-robin coroutines built on generators.
function* worker(n, k) { for (let i = 1; i <= k; i++) { console.log(`${n} step ${i}`); yield; } return n + " done"; }
function run(...tasks) {
  const q = [...tasks], out = [];
  while (q.length) { const t = q.shift(), { done, value } = t.next(); if (done) out.push(value); else q.push(t); }
  return out;
}
console.log(run(worker("a", 2), worker("b", 3), worker("c", 1)));
function* pingpong() { let got = yield "ping"; while (got < 3) got = yield "pong " + got; return "bye"; }
const p = pingpong(); console.log(p.next().value, p.next(1).value, p.next(2).value, p.next(3));
