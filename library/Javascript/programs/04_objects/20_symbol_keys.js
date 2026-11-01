// Symbols as hidden keys and well-known symbols on objects.
const id = Symbol("id"), other = Symbol("id");
const o = { [id]: 1, plain: 2 };
console.log(o[id], o[other], id === other, id.description, id.toString(), typeof id, Symbol.for("x") === Symbol.for("x"), Symbol.keyFor(Symbol.for("x")));
console.log(Object.keys(o), JSON.stringify(o), Object.getOwnPropertySymbols(o), { ...o });
const money = { amount: 5, [Symbol.toPrimitive](hint) { return hint === "string" ? "$5" : 5; }, get [Symbol.toStringTag]() { return "Money"; } };
console.log(`${money}`, money * 2, String(Object.prototype.toString.call(money)), money + "");
const range = { from: 1, to: 3, *[Symbol.iterator]() { for (let i = this.from; i <= this.to; i++) yield i; } };
console.log([...range], Math.max(...range), Array.from(range));
try { Symbol() + ""; } catch (e) { console.log(e.name, e.message); }
