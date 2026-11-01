// Rounding to places, significant digits and to a step.
const roundTo = (x, d) => Math.round(x * 10 ** d) / 10 ** d;
const toStep = (x, s) => Math.round(x / s) * s;
console.log(roundTo(1.005, 2), roundTo(2.345, 2), roundTo(1234.5678, -2), toStep(17, 5), toStep(0.37, 0.25));
for (const x of [1.5, 2.5, -1.5, -2.5, 0.5, -0.5, 1.4999]) console.log(x, Math.round(x), Math.floor(x), Math.ceil(x), Math.trunc(x), x.toFixed(0));
console.log((1.005).toFixed(2), (1.255).toFixed(2), (10.235).toFixed(2), (0).toFixed(2), (-1.5).toFixed(0), (1e21).toFixed(2), (0.000001).toFixed(7));
console.log((123.456).toPrecision(2), (0.00123).toPrecision(2), (1e21).toPrecision(3), (5).toPrecision(3), (123456).toPrecision(2));
