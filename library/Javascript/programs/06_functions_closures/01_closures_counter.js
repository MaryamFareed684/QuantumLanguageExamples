// Closures capture variables, not values.
function make() { let n = 0; return () => ++n; }
const a = make(), b = make();
console.log(a(), a(), b());
const fs = [];
for (var i = 0; i < 3; i++) fs.push(() => i);
console.log(fs.map((f) => f()));
const gs = [];
for (let j = 0; j < 3; j++) gs.push(() => j);
console.log(gs.map((f) => f()));
const hs = [];
for (var k = 0; k < 3; k++) hs.push(((v) => () => v)(k));
console.log(hs.map((f) => f()));
