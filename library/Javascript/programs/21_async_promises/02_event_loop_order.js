// Sync code, microtasks, nextTick, timers, immediates in order.
console.log("1 sync");
setTimeout(() => console.log("7 timeout 0"), 0);
setImmediate(() => console.log("8 immediate"));
process.nextTick(() => console.log("3 nextTick"));
Promise.resolve().then(() => { console.log("4 micro"); process.nextTick(() => console.log("6 tick in micro")); });
queueMicrotask(() => console.log("5 queueMicrotask"));
(async () => { console.log("2 async body"); await null; console.log("5b after await"); })();
console.log("2b sync end");
