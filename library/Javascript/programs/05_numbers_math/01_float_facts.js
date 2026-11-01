// Floating-point behaviour: precision, epsilon and special values.
console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3, Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON, Number.EPSILON);
console.log(Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 2 ** 53 + 1, Number.isSafeInteger(2 ** 53));
console.log(1 / 0, -1 / 0, 0 / 0, NaN === NaN, -0, 0 === -0, 1 / -0, Object.is(-0, 0), Math.sign(-0));
console.log(1e308 * 10, 5e-324 / 2, 1e21, 1e-6, 1e-7, 123456789012345680000, 1234567890123456789012, 0.000001234);
console.log(100.0, 1.10, 3.0e2, 0.5 + 0.25, 1 / 3, 2 / 3, 10 / 3, 1.7976931348623157e308, 4.35 * 100, 1.15 * 100);
