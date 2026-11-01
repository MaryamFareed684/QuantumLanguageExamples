// Properties of Error objects: message, name, cause, stack, toString.
const e = new Error("boom", { cause: "fuse" });
console.log(e.message, e.name, e.cause, String(e), e.toString(), Object.keys(e), typeof e.stack, e.stack.split("\n")[0]);
console.log(Object.getOwnPropertyNames(e).sort(), e.hasOwnProperty("name"), Error.prototype.name, Error.prototype.message === "");
const t = new TypeError(); console.log(String(t), t.message === "", new Error(5).message, new Error(undefined).message === "", new Error(null).message, Error("no new") instanceof Error);
const a = new AggregateError([new Error("x"), 1], "many"); console.log(a.name, a.message, a.errors.length, String(a));
e.name = "Custom"; console.log(String(e)); e.message = ""; console.log(String(e)); e.name = ""; console.log(JSON.stringify(String(e)));
console.log(JSON.stringify(new Error("hidden")), Object.prototype.toString.call(new Error("x")));
