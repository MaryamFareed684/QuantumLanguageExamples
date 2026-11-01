// Rule 30, rule 90 and Langton's ant.
const rule = (r, w, n) => { let c = Array(w).fill(0); c[w >> 1] = 1; const o = []; for (let i = 0; i < n; i++) { o.push(c.map((x) => (x ? "#" : " ")).join("").trimEnd()); c = c.map((_, j) => (r >> ((c[(j + w - 1) % w] << 2) | (c[j] << 1) | c[(j + 1) % w])) & 1); } return o; };
console.log(rule(30, 21, 8).join("\n")); console.log(rule(90, 21, 8).join("\n"));
const ant = (n) => { const b = new Set(); let x = 0, y = 0, d = 0; for (let i = 0; i < n; i++) { const k = x + "," + y; if (b.has(k)) { b.delete(k); d = (d + 3) % 4; } else { b.add(k); d = (d + 1) % 4; } x += [0, 1, 0, -1][d]; y += [-1, 0, 1, 0][d]; } return [b.size, x, y]; }; console.log(ant(100), ant(1000), ant(11000));
