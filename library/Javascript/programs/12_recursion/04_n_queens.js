// N-Queens: solutions and one printed board.
function queens(n) {
  const out = [], col = [], d1 = [], d2 = [];
  (function go(r, p) {
    if (r === n) { out.push([...p]); return; }
    for (let c = 0; c < n; c++) { if (col[c] || d1[r + c] || d2[r - c + n]) continue; col[c] = d1[r + c] = d2[r - c + n] = true; p.push(c); go(r + 1, p); p.pop(); col[c] = d1[r + c] = d2[r - c + n] = false; }
  })(0, []);
  return out;
}
for (const n of [1, 4, 6, 8]) console.log(n, queens(n).length);
for (const c of queens(6)[0]) console.log(".".repeat(c) + "Q" + ".".repeat(5 - c));
