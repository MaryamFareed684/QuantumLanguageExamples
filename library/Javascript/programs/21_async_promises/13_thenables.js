// Thenables, resolution order and promise-resolve ticks.
const log = (x) => console.log(x);
const th = { then(r) { log("then called"); r("thenable"); } };
Promise.resolve(th).then(log); (async () => log(await th))();
Promise.resolve().then(() => log("a1")).then(() => log("a2")).then(() => log("a3")).then(() => log("a4"));
Promise.resolve().then(() => Promise.resolve("inner")).then(log);
new Promise((r) => r(Promise.resolve("wrapped"))).then(log);
const bad = { get then() { throw new Error("getter throw"); } }; Promise.resolve(bad).catch((e) => log(e.message));
const self = new Promise((r) => setTimeout(() => r(self), 0)); self.catch((e) => log(e.name + ": " + e.message));
