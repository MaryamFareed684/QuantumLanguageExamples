// Kaprekar's routine, look-and-say and Lychrel checks.
const kap = (n) => { const o = []; while (n !== 6174 && o.length < 10) { const s = [...String(n).padStart(4, "0")].sort(); n = +[...s].reverse().join("") - +s.join(""); o.push(n); } return o; }; console.log(kap(3524), kap(1000), kap(6174));
const say = (s) => s.replace(/(.)\1*/g, (m, c) => m.length + c); let x = "1"; const seq = []; for (let i = 0; i < 8; i++) { seq.push(x); x = say(x); } console.log(seq);
const lych = (n) => { let v = BigInt(n); for (let i = 0; i < 50; i++) { const r = BigInt([...String(v)].reverse().join("")); v += r; if (String(v) === [...String(v)].reverse().join("")) return i + 1; } return null; }; console.log([47, 349, 196, 4994].map(lych));
const lucky = (n) => { let a = Array.from({ length: n }, (_, i) => 2 * i + 1); for (let i = 1; i < a.length && a[i] <= a.length; i++) a = a.filter((_, j) => (j + 1) % a[i]); return a; }; console.log(lucky(30));
