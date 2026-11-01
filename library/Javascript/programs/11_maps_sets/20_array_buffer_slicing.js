// Copy semantics: slice, subarray, set, and structuredClone.
const a = new Uint8Array([1, 2, 3, 4]);
const sl = a.slice(1, 3), sb = a.subarray(1, 3);
a[1] = 99; console.log(sl, sb);
const t = new Uint8Array(6); t.set([7, 8], 1); t.set(a.subarray(0, 2), 4); console.log(t);
console.log(new Uint16Array(new Uint8Array([1, 2]).buffer), new Uint8Array(new Uint16Array([258])), new Float64Array([1, 2]).map((x) => x / 3));
const c = structuredClone(new Map([[1, new Set([{ a: new Date(0) }])]])); console.log(c, c.get(1) instanceof Set);
console.log(a.buffer.slice(1).byteLength, ArrayBuffer.isView(a), ArrayBuffer.isView(a.buffer), a.constructor.name, Object.getPrototypeOf(Uint8Array).name);
