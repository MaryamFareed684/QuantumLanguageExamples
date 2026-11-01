// Hex dumps and base conversion by hand.
const toBase = (n, b) => {
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  if (n === 0) return "0";
  let out = "";
  while (n > 0) { out = digits[n % b] + out; n = Math.floor(n / b); }
  return out;
};
for (const [n, b] of [[255, 16], [255, 2], [255, 8], [1295, 36], [0, 2]]) console.log(n, b, toBase(n, b), n.toString(b));
const hex = (s) => [...s].map((c) => c.charCodeAt(0).toString(16).padStart(2, "0")).join(" ");
console.log(hex("Hello!"));
const unhex = (h) => h.split(" ").map((x) => String.fromCharCode(parseInt(x, 16))).join("");
console.log(unhex(hex("round trip")));
console.log((-255).toString(16), (3.5).toString(2), parseInt("zz", 36), Number("0x1f"), Number("0b101"), Number("0o17"), 0xff, 0b11, 0o7);
