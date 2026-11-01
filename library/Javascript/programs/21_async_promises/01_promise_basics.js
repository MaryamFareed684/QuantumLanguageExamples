// Creating promises, then, catch and finally.
const ok = new Promise((res) => res(1));
const bad = new Promise((_, rej) => rej(new Error("no")));
ok.then((v) => { console.log("then", v); return v + 1; }).then((v) => console.log("chained", v));
bad.catch((e) => { console.log("catch", e.message); return "recovered"; }).then((v) => console.log(v));
ok.finally(() => console.log("finally")).then((v) => console.log("after finally", v));
console.log(ok, bad.catch(() => 0) instanceof Promise, typeof ok.then, Promise.resolve(ok) === ok);
Promise.resolve(5).then(2).then((v) => console.log("skip non-fn", v));
Promise.reject(new Error("x")).then(() => console.log("no")).catch((e) => console.log("late", e.message));
new Promise((res) => { res(1); res(2); throw new Error("ignored"); }).then(console.log);
new Promise(() => { throw new Error("from executor"); }).catch((e) => console.log(e.message));
console.log("sync end");
