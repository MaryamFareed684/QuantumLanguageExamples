// Catching RangeError from runaway recursion and recovering.
function depth() { try { return 1 + depth(); } catch (e) { return 1; } }
const d = depth();
console.log(d > 1000);
function inf(n) { return inf(n + 1); }
try { inf(0); } catch (e) { console.log(e.name, e.message, e instanceof RangeError); }
console.log("recovered", [1, 2, 3].map((x) => x * 2));
