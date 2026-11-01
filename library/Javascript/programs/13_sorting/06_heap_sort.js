// Heapsort with sift-down, and top-k.
function hs(a) {
  const sift = (i, n) => { for (;;) { let m = i, l = 2 * i + 1, r = l + 1; if (l < n && a[l] > a[m]) m = l; if (r < n && a[r] > a[m]) m = r; if (m === i) return; [a[i], a[m]] = [a[m], a[i]]; i = m; } };
  for (let i = (a.length >> 1) - 1; i >= 0; i--) sift(i, a.length);
  for (let n = a.length - 1; n > 0; n--) { [a[0], a[n]] = [a[n], a[0]]; sift(0, n); }
  return a;
}
console.log(hs([4, 10, 3, 5, 1]), hs([]), hs([2, 1]), hs(["b", "c", "a"]));
