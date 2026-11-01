// Converting between strings and numbers, and number formatting.
console.log(parseInt("42"), parseInt("42px"), parseInt("ff", 16), parseInt("101", 2), parseInt("x"), parseFloat("3.14abc"));
console.log((255).toString(16), (255).toString(2), (0.5).toString(2), (1234.5678).toFixed(2), (1234.5678).toPrecision(6));
console.log((1e21).toString(), (1e-7).toString(), (123.456).toExponential(2), 1 / 3, 100 / 3, 1e21 + 1, 2 ** 53);
console.log(Number.isInteger(5.0), Number.isNaN("a"), isNaN("a"), Number.isFinite("5"), isFinite("5"));
console.log(+"12", +"", +true, -"3", "5" * 1, ~~7.9, 7.9 | 0, Math.trunc(-7.9));
console.log(String(0.1 + 0.2), (0.1 + 0.2).toFixed(10), 1.1 * 3, 0.1 * 3, 1e3, 1.5e300 * 1.5e300, -1 / 0);
