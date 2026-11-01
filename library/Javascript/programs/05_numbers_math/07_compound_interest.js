// Compound interest, loan payments and savings tables.
const compound = (p, r, n, t) => p * (1 + r / n) ** (n * t);
for (const n of [1, 4, 12, 365]) console.log(n, compound(1000, 0.05, n, 10).toFixed(2));
const payment = (p, r, m) => (p * (r / 12)) / (1 - (1 + r / 12) ** -m);
console.log(payment(200000, 0.04, 360).toFixed(2));
let bal = 1000;
for (let y = 1; y <= 5; y++) { bal = bal * 1.03 + 500; console.log(y, bal.toFixed(2).padStart(10)); }
console.log(Math.ceil(Math.log(2) / Math.log(1.07)));
