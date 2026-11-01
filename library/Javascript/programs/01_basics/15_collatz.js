// The longest Collatz chain below a limit.
function chain(n) {
  let steps = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    steps++;
  }
  return steps;
}
for (const n of [1, 6, 7, 27, 97]) console.log(n, chain(n));
let best = 1, bestSteps = 0;
for (let n = 1; n < 10000; n++) {
  const s = chain(n);
  if (s > bestSteps) { best = n; bestSteps = s; }
}
console.log("longest below 10000:", best, bestSteps);
