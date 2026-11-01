// Conway's Game of Life on a small torus.
let g = [".......", "..#....", "...#...", ".###...", ".......", ".......", "......."].map((r) => [...r].map((c) => +(c === "#")));
const step = (b) => b.map((r, y) => r.map((v, x) => { let n = 0; for (let a = -1; a < 2; a++) for (let c = -1; c < 2; c++) if (a || c) n += b[(y + a + b.length) % b.length][(x + c + r.length) % r.length]; return +(n === 3 || (v && n === 2)); }));
for (let i = 0; i < 4; i++) { console.log(`gen ${i} alive ${g.flat().reduce((a, b) => a + b)}`); console.log(g.map((r) => r.map((v) => (v ? "#" : ".")).join("")).join("\n")); g = step(g); }
