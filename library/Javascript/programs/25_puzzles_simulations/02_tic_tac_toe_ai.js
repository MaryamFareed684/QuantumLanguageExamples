// Tic-tac-toe with a perfect minimax player.
const L = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; const win = (b) => L.find(([a, c, d]) => b[a] && b[a] === b[c] && b[a] === b[d]) ? b[L.find(([a, c, d]) => b[a] && b[a] === b[c] && b[a] === b[d])[0]] : null;
let nodes = 0; const mm = (b, p) => { nodes++; const w = win(b); if (w) return w === "X" ? 1 : -1; if (b.every(Boolean)) return 0; let best = p === "X" ? -2 : 2; for (let i = 0; i < 9; i++) if (!b[i]) { b[i] = p; const s = mm(b, p === "X" ? "O" : "X"); b[i] = null; best = p === "X" ? Math.max(best, s) : Math.min(best, s); } return best; };
const move = (b, p) => { let bi = -1, bs = p === "X" ? -2 : 2; for (let i = 0; i < 9; i++) if (!b[i]) { b[i] = p; const s = mm(b, p === "X" ? "O" : "X"); b[i] = null; if (p === "X" ? s > bs : s < bs) { bs = s; bi = i; } } return bi; };
const b = Array(9).fill(null); let p = "X"; while (!win(b) && b.some((x) => !x)) { b[move(b, p)] = p; p = p === "X" ? "O" : "X"; }
for (let i = 0; i < 9; i += 3) console.log(b.slice(i, i + 3).join("|")); console.log("winner", win(b), nodes);
