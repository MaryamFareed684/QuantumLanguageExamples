// process.on for uncaught errors and exit ordering.
process.on("uncaughtException", (e) => { console.log("uncaught:", e.message); });
process.on("exit", (c) => console.log("exit code", c));
process.on("unhandledRejection", (r) => console.log("unhandled:", r.message));
setTimeout(() => { throw new Error("in timer"); }, 0);
Promise.reject(new Error("rejected"));
setTimeout(() => console.log("still alive"), 5);
console.log("end of script");
