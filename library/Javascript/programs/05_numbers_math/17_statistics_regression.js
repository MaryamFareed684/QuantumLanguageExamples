// Least-squares regression and correlation.
const xs = [1, 2, 3, 4, 5, 6], ys = [2.2, 4.1, 6.2, 7.9, 10.1, 12.2];
const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
const mx = mean(xs), my = mean(ys);
const sxy = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0), sxx = xs.reduce((s, x) => s + (x - mx) ** 2, 0), syy = ys.reduce((s, y) => s + (y - my) ** 2, 0);
const slope = sxy / sxx, icpt = my - slope * mx;
console.log(slope, icpt, sxy / Math.sqrt(sxx * syy));
console.log(xs.map((x) => (icpt + slope * x).toFixed(3)));
