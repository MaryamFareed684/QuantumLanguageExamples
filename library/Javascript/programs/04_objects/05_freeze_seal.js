// freeze, seal, preventExtensions and strict-mode errors.
"use strict";
const f = Object.freeze({ a: 1, inner: { b: 2 } });
try { f.a = 2; } catch (e) { console.log(e.name + ": " + e.message); }
try { f.z = 2; } catch (e) { console.log(e.name + ": " + e.message); }
try { delete f.a; } catch (e) { console.log(e.name + ": " + e.message); }
f.inner.b = 3; console.log(f, Object.isFrozen(f), Object.isFrozen(f.inner));
const s = Object.seal({ a: 1 });
s.a = 2; try { s.b = 1; } catch (e) { console.log(e.message); }
console.log(s, Object.isSealed(s), Object.isFrozen(s), Object.isExtensible(s));
const n = Object.preventExtensions({ a: 1 });
delete n.a; console.log(n, Object.isExtensible(n), Object.isFrozen(n));
const fa = Object.freeze([1, 2]);
try { fa.push(3); } catch (e) { console.log(e.name, e.message); }
