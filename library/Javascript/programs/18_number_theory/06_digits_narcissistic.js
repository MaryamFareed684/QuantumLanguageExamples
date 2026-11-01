// Digit tricks: sums, reversals, Armstrong and Harshad numbers.
const dig = (n) => [...String(n)].map(Number), sum = (a) => a.reduce((x, y) => x + y, 0);
console.log(dig(9045), sum(dig(9999)), +String(1230).split("").reverse().join(""));
const arm = []; for (let n = 1; n < 100000; n++) { const d = dig(n); if (sum(d.map((x) => x ** d.length)) === n) arm.push(n); } console.log(arm);
console.log([...Array(60).keys()].slice(1).filter((n) => n % sum(dig(n)) === 0));
const droot = (n) => (n < 10 ? n : droot(sum(dig(n)))); console.log(droot(942), droot(132189), 1 + ((942 - 1) % 9));
const happy = (n) => { const s = new Set(); while (n !== 1 && !s.has(n)) { s.add(n); n = sum(dig(n).map((x) => x * x)); } return n === 1; }; console.log([...Array(50).keys()].filter((n) => n && happy(n)));
