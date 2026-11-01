// Arithmetic on decimal strings: add, multiply, compare.
const add = (a, b) => { let o = "", c = 0; for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || c; i--, j--) { const s = +(a[i] ?? 0) + +(b[j] ?? 0) + c; o = s % 10 + o; c = s >= 10 ? 1 : 0; } return o || "0"; };
const mul = (a, b) => { const r = Array(a.length + b.length).fill(0); for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) { const s = a[i] * b[j] + r[i + j + 1]; r[i + j + 1] = s % 10; r[i + j] += Math.floor(s / 10); } return r.join("").replace(/^0+(?=.)/, ""); };
const cmp = (a, b) => (a.length - b.length) || (a < b ? -1 : a > b ? 1 : 0);
console.log(add("999", "1"), add("0", "0"), mul("123", "456"), mul("0", "99"), mul("99999999999999", "99999999999999"), BigInt("99999999999999") ** 2n, cmp("100", "99"), cmp("12", "12"), cmp("12", "13"));
let f = "1"; for (let i = 2; i <= 30; i++) f = mul(f, String(i)); console.log(f, f === String([...Array(29).keys()].reduce((p, i) => p * BigInt(i + 2), 1n)));
