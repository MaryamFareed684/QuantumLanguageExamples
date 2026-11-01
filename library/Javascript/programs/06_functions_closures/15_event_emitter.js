// A small event emitter built from closures.
function emitter() {
  const h = {};
  return {
    on(e, f) { (h[e] ||= []).push(f); return () => { h[e] = h[e].filter((g) => g !== f); }; },
    once(e, f) { const off = this.on(e, (...a) => { off(); f(...a); }); },
    emit(e, ...a) { (h[e] || []).slice().forEach((f) => f(...a)); return (h[e] || []).length; },
  };
}
const em = emitter();
const off = em.on("x", (v) => console.log("A", v));
em.on("x", (v) => console.log("B", v));
em.once("x", (v) => console.log("once", v));
console.log(em.emit("x", 1));
off();
console.log(em.emit("x", 2), em.emit("none"));
const EventEmitter = require("events");
const ee = new EventEmitter();
ee.on("hi", (a, b) => console.log("node", a, b));
console.log(ee.emit("hi", 1, 2), ee.emit("no"), ee.listenerCount("hi"));
