// Typed arrays: construction, clamping, wraparound and views.
const u8 = new Uint8Array([1, 256, -1, 3.9]); const c = new Uint8ClampedArray([300, -5, 1.5]); const i16 = Int16Array.of(70000, -1); const f = new Float32Array([0.1]); const f64 = new Float64Array(2);
console.log(u8, c, i16, f, f[0], f64, u8.length, u8.byteLength, i16.BYTES_PER_ELEMENT, Int32Array.BYTES_PER_ELEMENT);
const b = new ArrayBuffer(8); const v32 = new Uint32Array(b), v8 = new Uint8Array(b);
v32[0] = 0x01020304; console.log(v8, b, b.byteLength, v8.buffer === b, new Uint8Array(b, 2, 2));
console.log(u8.map((x) => x * 2), [...u8], Array.from(u8), u8.slice(1, 2), u8.subarray(1, 3), u8.join("-"), u8.reduce((a, x) => a + x), Object.prototype.toString.call(u8));
const big = new BigInt64Array(1); big[0] = -1n; console.log(big, new BigUint64Array(big.buffer)[0]);
const s = new Int32Array([5, 1, 10, 2]); console.log(s.sort(), s.reverse(), s.fill(7, 1, 2), s.indexOf(7), s.includes(99), s.at(-1)); s[99] = 1; console.log(s[99], s.length);
