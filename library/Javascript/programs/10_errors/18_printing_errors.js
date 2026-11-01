// console.log of error objects inside containers.
const strip = (s) => s.split("\n")[0];
console.log(strip(require("util").inspect(new Error("x"))));
console.log(strip(require("util").inspect(new TypeError("t"))));
class My extends Error { constructor(m) { super(m); this.name = "My"; this.extra = 1; } }
const s = require("util").inspect(new My("m"));
console.log(strip(s), s.includes("extra: 1"), s.endsWith("}"));
console.log(strip(require("util").inspect({ e: new RangeError("r") })));
const noStack = new Error("ns"); noStack.stack = undefined; console.log(noStack);
const st = new Error("st"); st.stack = "custom stack"; console.log(st, [st]);
