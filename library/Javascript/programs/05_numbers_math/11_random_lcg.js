// A seeded linear congruential generator and its distribution.
function lcg(seed) {
  let s = seed;
  return () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296;
}
const r = lcg(2024);
console.log([r(), r(), r()].map((x) => x.toFixed(6)));
const buckets = new Array(10).fill(0);
for (let i = 0; i < 10000; i++) buckets[Math.floor(r() * 10)]++;
console.log(buckets, buckets.reduce((a, b) => a + b));
const dice = () => 1 + Math.floor(r() * 6);
const rolls = Array.from({ length: 12 }, dice);
console.log(rolls.join(" "), rolls.reduce((a, b) => a + b) / rolls.length);
