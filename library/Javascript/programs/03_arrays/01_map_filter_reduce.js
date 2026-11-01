// The core trio, separately and chained.
const nums = [5, 12, 8, 130, 44, 3];
console.log(nums.map((n) => n * 2), nums.filter((n) => n % 2 === 0), nums.reduce((a, b) => a + b, 0));
console.log(nums.map((n, i, arr) => n + i + arr.length));
console.log(nums.filter((n) => n > 10).map((n) => n / 2).reduce((a, b) => Math.max(a, b)));
console.log(nums.reduceRight((acc, n) => acc + "," + n), [[1, 2], [3]].reduce((a, b) => a.concat(b), []));
try { [].reduce((a, b) => a + b); } catch (e) { console.log(e.name + ": " + e.message); }
console.log([].reduce((a, b) => a + b, "init"), [7].reduce((a, b) => a + b));
