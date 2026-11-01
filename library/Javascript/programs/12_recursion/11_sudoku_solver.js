// A backtracking Sudoku solver.
const s = "530070000600195000098000060800060003400803001700020006060000280000419005000080079".split("").map(Number);
const ok = (i, v) => { const r = i / 9 | 0, c = i % 9, br = r - r % 3, bc = c - c % 3; for (let k = 0; k < 9; k++) if (s[r * 9 + k] === v || s[k * 9 + c] === v || s[(br + (k / 3 | 0)) * 9 + bc + k % 3] === v) return false; return true; };
function solve(i = s.indexOf(0)) { if (i < 0) return true; for (let v = 1; v <= 9; v++) if (ok(i, v)) { s[i] = v; if (solve(s.indexOf(0))) return true; s[i] = 0; } return false; }
console.log(solve());
for (let r = 0; r < 9; r++) console.log(s.slice(r * 9, r * 9 + 9).join(""));
