// Extending built-ins and undoing it; method_missing via Proxy.
Array.prototype.last = function () { return this[this.length - 1]; }; String.prototype.rev = function () { return [...this].reverse().join(""); }; Number.prototype.times = function (f) { for (let i = 0; i < this; i++) f(i); };
console.log([1, 2].last(), "abc".rev(), Object.keys([1]), (() => { const o = []; for (const k in [1]) o.push(k); return o; })()); (2).times((i) => console.log(i)); delete Array.prototype.last; delete String.prototype.rev; delete Number.prototype.times; console.log([].last, "".rev);
Object.prototype.leak = 1; const ks = []; for (const k in { a: 1 }) ks.push(k); console.log(ks, ({}).leak, Object.keys({ a: 1 })); delete Object.prototype.leak;
const ghost = (t = {}) => new Proxy(t, { get(o, k) { if (k in o || typeof k === "symbol") return o[k]; return (...a) => `${k}(${a.join()})`; } }); const g = ghost({ real() { return "r"; } }); console.log(g.real(), g.anything(1, 2), g.findByName("x"));
const orig = Math.max; Math.max = (...a) => orig(...a) + 1; console.log(Math.max(1, 2)); Math.max = orig; console.log(Math.max(1, 2), Math.hasOwnProperty("max"));
