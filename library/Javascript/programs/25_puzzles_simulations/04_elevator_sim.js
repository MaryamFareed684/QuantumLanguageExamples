// An elevator serving requests with the SCAN policy.
const reqs = [[0, 5], [1, 3], [2, 8], [6, 1], [7, 9], [12, 2]]; let fl = 0, dir = 1, t = 0, stops = [], log = [], pending = [...reqs];
const need = () => stops.length || pending.some((q) => q[0] <= t);
while (pending.length || stops.length) { for (const q of pending.filter((x) => x[0] <= t)) { stops.push(q[1]); pending = pending.filter((y) => y !== q); log.push(`t${t} req ${q[1]}`); } if (stops.includes(fl)) { log.push(`t${t} stop ${fl}`); stops = stops.filter((x) => x !== fl); } if (stops.length) { if (!stops.some((x) => (x - fl) * dir > 0)) dir = -dir; fl += dir; } t++; }
console.log(log.join("\n"), "\nend", t, fl);
