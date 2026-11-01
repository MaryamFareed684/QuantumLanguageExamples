// Producer and consumer with an async channel.
class Chan { buf = []; wait = []; closed = false; put(v) { const w = this.wait.shift(); w ? w({ value: v, done: false }) : this.buf.push(v); } close() { this.closed = true; for (const w of this.wait.splice(0)) w({ done: true }); } next() { if (this.buf.length) return Promise.resolve({ value: this.buf.shift(), done: false }); if (this.closed) return Promise.resolve({ done: true }); return new Promise((r) => this.wait.push(r)); } [Symbol.asyncIterator]() { return this; } }
const c = new Chan(); const out = [];
const prod = async () => { for (let i = 0; i < 5; i++) { c.put(i); console.log("put", i); await null; } c.close(); };
const cons = async (n) => { for await (const v of c) out.push(`${n}${v}`); };
Promise.all([cons("a"), cons("b"), prod()]).then(() => console.log(out));
