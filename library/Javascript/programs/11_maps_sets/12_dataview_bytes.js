// DataView endianness and packing records into bytes.
const b = new ArrayBuffer(12), d = new DataView(b);
d.setUint16(0, 0x1234); d.setUint16(2, 0x1234, true); d.setFloat32(4, 1.5); d.setInt32(8, -2, true);
console.log(new Uint8Array(b), d.getUint16(0), d.getUint16(0, true), d.getFloat32(4), d.getInt32(8, true), d.getUint8(8), d.byteLength);
try { d.getInt32(10); } catch (e) { console.log(e.name, e.message); }
const crc = (bytes) => { let c = -1; for (const x of bytes) { c ^= x; for (let k = 0; k < 8; k++) c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1; } return (c ^ -1) >>> 0; };
console.log(crc(new TextEncoder().encode("hello")).toString(16), new TextEncoder().encode("é"), new TextDecoder().decode(new Uint8Array([104, 105])));
console.log(Buffer.from("hi").toString("hex"), Buffer.from("aGk=", "base64").toString(), Buffer.from("é").length, Buffer.from([1, 2]), btoa("hi"), atob("aGk="), Buffer.concat([Buffer.from("a"), Buffer.from("b")]).toString());
