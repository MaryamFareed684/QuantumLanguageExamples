// Binary strings: add, multiply and popcount.
const addBin = (a, b) => {
  let i = a.length - 1, j = b.length - 1, carry = 0, out = "";
  while (i >= 0 || j >= 0 || carry) { const s = +(a[i--] || 0) + +(b[j--] || 0) + carry; out = s % 2 + out; carry = s >> 1; }
  return out || "0";
};
console.log(addBin("1011", "110"), parseInt("1011", 2) + parseInt("110", 2), addBin("0", "0"));
const pop = (n) => { let c = 0; while (n) { n &= n - 1; c++; } return c; };
console.log([0, 1, 255, 1023, 2 ** 31 - 1].map(pop), (1023).toString(2).length);
const gray = (n) => n ^ (n >> 1);
console.log([0, 1, 2, 3, 4, 5, 6, 7].map((n) => gray(n).toString(2).padStart(3, "0")));
