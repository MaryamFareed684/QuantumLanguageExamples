// xorshift32 with Fisher-Yates shuffle.
let state = 123456789;
function xorshift() {
  state ^= state << 13; state ^= state >>> 17; state ^= state << 5;
  return state >>> 0;
}
console.log(xorshift(), xorshift(), xorshift());
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = xorshift() % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]), shuffle([..."abcdef"]).join(""));
