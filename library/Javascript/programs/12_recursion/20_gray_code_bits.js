// Gray codes, bit strings and n-digit counting.
const gray = (n) => (n === 0 ? [""] : ((p) => [...p.map((x) => "0" + x), ...[...p].reverse().map((x) => "1" + x)])(gray(n - 1)));
console.log(gray(3), gray(10).length);
const strs = (n, a = "ab") => (n === 0 ? [""] : [...a].flatMap((c) => strs(n - 1, a).map((s) => c + s)));
console.log(strs(2), strs(3, "01").length, strs(4, "xyz").at(-1));
const noOnes = (n, l = "0") => n === 0 ? 1 : noOnes(n - 1, "0") + (l === "1" ? 0 : noOnes(n - 1, "1")); console.log([1, 2, 3, 4, 5, 10].map((n) => noOnes(n)));
