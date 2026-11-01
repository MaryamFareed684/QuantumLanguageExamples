// Checking required methods before use.
const implement = (o, ...m) => { const miss = m.filter((k) => typeof o[k] !== "function"); if (miss.length) throw new TypeError(`missing: ${miss}`); return o; };
class Fs { read() { return "data"; } write() {} }
class Ro { read() { return "ro"; } }
console.log(implement(new Fs(), "read", "write").read());
try { implement(new Ro(), "read", "write", "close"); } catch (e) { console.log(e.message); }
const comparable = { lt(o) { return this.cmp(o) < 0; }, gt(o) { return this.cmp(o) > 0; }, eq(o) { return this.cmp(o) === 0; } };
class Ver { constructor(v) { this.v = v; } cmp(o) { return this.v - o.v; } }
Object.assign(Ver.prototype, comparable);
console.log(new Ver(1).lt(new Ver(2)), new Ver(2).gt(new Ver(3)), new Ver(2).eq(new Ver(2)), Object.keys(Ver.prototype));
