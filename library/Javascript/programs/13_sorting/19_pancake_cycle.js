// Pancake sort and cycle sort counting writes.
function pancake(a) { const flip = (k) => { a = [...a.slice(0, k).reverse(), ...a.slice(k)]; }; const log = []; for (let n = a.length; n > 1; n--) { const m = a.indexOf(Math.max(...a.slice(0, n))) + 1; if (m !== n) { if (m > 1) { flip(m); log.push(m); } flip(n); log.push(n); } } return [a, log]; }
console.log(pancake([3, 2, 4, 1]));
function cycle(a) { let w = 0; for (let s = 0; s < a.length - 1; s++) { let v = a[s], p = s; for (let i = s + 1; i < a.length; i++) if (a[i] < v) p++; if (p === s) continue; while (v === a[p]) p++; [a[p], v] = [v, a[p]]; w++; while (p !== s) { p = s; for (let i = s + 1; i < a.length; i++) if (a[i] < v) p++; while (v === a[p]) p++; [a[p], v] = [v, a[p]]; w++; } } return [a, w]; }
console.log(cycle([5, 2, 2, 8, 1]));
