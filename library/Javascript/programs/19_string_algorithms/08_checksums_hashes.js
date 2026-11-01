// CRC32, Adler-32, FNV and DJB string hashes.
const tbl = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
const crc = (s) => { let c = -1; for (const b of Buffer.from(s)) c = tbl[(c ^ b) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; };
const adler = (s) => { let a = 1, b = 0; for (const x of Buffer.from(s)) { a = (a + x) % 65521; b = (b + a) % 65521; } return ((b << 16) | a) >>> 0; };
const fnv = (s) => { let h = 0x811c9dc5; for (const b of Buffer.from(s)) { h ^= b; h = Math.imul(h, 16777619); } return h >>> 0; };
const djb = (s) => { let h = 5381; for (const c of s) h = (Math.imul(h, 33) ^ c.charCodeAt(0)) >>> 0; return h; };
for (const s of ["", "a", "hello world", "The quick brown fox jumps over the lazy dog"]) console.log(crc(s).toString(16), adler(s).toString(16), fnv(s).toString(16), djb(s));
const c = require("crypto"); console.log(c.createHash("md5").update("hello").digest("hex"), c.createHash("sha256").update("hello").digest("hex"), c.createHash("sha1").update("").digest("base64"));
