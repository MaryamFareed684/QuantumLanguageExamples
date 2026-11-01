// Estimating pi and an integral with seeded Monte Carlo.
let s = 7;
const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
let inside = 0;
const N = 200000;
for (let i = 0; i < N; i++) { const x = rnd(), y = rnd(); if (x * x + y * y <= 1) inside++; }
console.log((4 * inside) / N);
let sum = 0;
for (let i = 0; i < N; i++) { const x = rnd(); sum += x * x; }
console.log(sum / N);
