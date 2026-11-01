// EventEmitter with once, promises and error events.
const E = require("events"); const { once } = E; const em = new E();
em.on("a", (x) => console.log("on", x)); em.once("a", (x) => console.log("once", x)); em.prependListener("a", () => console.log("first"));
console.log(em.emit("a", 1), em.emit("a", 2), em.listenerCount("a"), em.eventNames());
const rd = new E(); (async () => { setTimeout(() => rd.emit("ready", 42, "b"), 1); console.log(await once(rd, "ready")); })();
try { em.emit("error", new Error("unhandled ev")); } catch (e) { console.log(e.message); }
em.on("error", (e) => console.log("handled", e.message)); em.emit("error", new Error("e2"));
const h = () => {}; em.on("x", h); em.off("x", h); console.log(em.listeners("x").length, em.getMaxListeners(), new E() instanceof E);
class My extends E { go() { this.emit("went", this); return this; } } new My().on("went", (s) => console.log(s.constructor.name)).go();
