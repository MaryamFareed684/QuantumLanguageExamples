// Number statics and instance methods.
console.log(Number.parseInt("7f", 16), Number.parseFloat("1.5e3x"), Number.isInteger(1e300), Number.isInteger("1"), Number.isSafeInteger(2 ** 53 - 1));
console.log((12).toString().length, (1.5).toString(), (10).toString(10), (35).toString(36), Number("").toString(), (-1.5e-9).toString());
console.log(new Number(5) + 1, typeof new Number(5), new Number(5) == 5, new Number(5) === 5, (5).valueOf(), Number.prototype.hasOwnProperty("toFixed"));
console.log(Number("12.50"), Number("-0"), Number("  \n"), Number("1,000"), Number("Infinity"), Number("-Infinity"), Number(new Date(5)), Number([]), Number([1, 2]), Number({}));
console.log((1234.5).toLocaleString("en-US"), (0.5).toLocaleString("en-US", { style: "percent" }), (1234567.891).toLocaleString("en-US", { maximumFractionDigits: 1 }));
