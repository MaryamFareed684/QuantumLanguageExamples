// Towers of Hanoi: moves and counts.
function hanoi(n, a, b, c, out) { if (n === 0) return out; hanoi(n - 1, a, c, b, out); out.push(`${a}->${c}`); hanoi(n - 1, b, a, c, out); return out; }
console.log(hanoi(3, "A", "B", "C", []).join(" "));
for (const n of [1, 5, 10, 16]) console.log(n, hanoi(n, "A", "B", "C", []).length);
