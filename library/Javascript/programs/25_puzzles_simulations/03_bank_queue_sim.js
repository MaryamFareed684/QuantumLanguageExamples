// A discrete-event bank queue with a seeded generator.
let s = 42; const r = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff; let t = 0, tellers = [0, 0], wait = 0, n = 0, mx = 0;
while (t < 480) { t += -Math.log(1 - r()) * 2; const st = 2 + r() * 4, i = tellers[0] <= tellers[1] ? 0 : 1, b = Math.max(t, tellers[i]), w = b - t; wait += w; mx = Math.max(mx, w); tellers[i] = b + st; n++; }
console.log(n, (wait / n).toFixed(3), mx.toFixed(3), tellers.map((x) => x.toFixed(1)));
