// Exceptions crossing callbacks, map and getters.
const r = [1, 2, 3];
try { r.map((x) => { if (x === 2) throw new Error("at " + x); return x; }); } catch (e) { console.log(e.message); }
const o = { get bad() { throw new RangeError("getter"); } };
try { o.bad; } catch (e) { console.log(e.name); }
try { JSON.stringify(o); } catch (e) { console.log("stringify", e.message); }
try { [3, 1].sort(() => { throw new Error("cmp"); }); } catch (e) { console.log(e.message); }
try { new (class { constructor() { throw new Error("ctor"); } })(); } catch (e) { console.log(e.message); }
try { `${{ toString() { throw new Error("tostr"); } }}`; } catch (e) { console.log(e.message); }
function* g() { throw new Error("gen"); } try { [...g()]; } catch (e) { console.log(e.message); }
