// setTimeout, setInterval, clear and ordering by delay.
const t = setInterval(() => { console.log("tick", ++n); if (n === 3) clearInterval(t); }, 40); let n = 0;
const never = setTimeout(() => console.log("never"), 1); clearTimeout(never);
setTimeout((a, b) => console.log("args", a, b), 5, "x", "y");
for (const ms of [70, 20, 55]) setTimeout(() => console.log("after", ms), ms);
console.log(typeof t, typeof t.ref, t.hasRef(), typeof setTimeout(() => {}, 0)[Symbol.toPrimitive]);
const im = setImmediate(() => console.log("no")); clearImmediate(im);
const u = setTimeout(() => console.log("unref never holds"), 100000); u.unref();
