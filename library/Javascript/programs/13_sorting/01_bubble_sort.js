// Bubble sort with early exit and swap counts.
function bubble(input) {
  const a = [...input]; let swaps = 0;
  for (let n = a.length; n > 1; n--) { let done = true; for (let i = 1; i < n; i++) if (a[i - 1] > a[i]) { [a[i - 1], a[i]] = [a[i], a[i - 1]]; swaps++; done = false; } if (done) break; }
  return { a, swaps };
}
console.log(bubble([5, 1, 4, 2, 8]), bubble([1, 2, 3]), bubble([]), bubble([3, 2, 1]).swaps);
