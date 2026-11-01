// Retrying flaky operations with counters and fallback.
function flaky(fails) { let n = 0; return () => { if (n++ < fails) throw new Error(`fail ${n}`); return `ok after ${n}`; }; }
function retry(f, times) {
  let last;
  for (let i = 1; i <= times; i++) { try { return f(); } catch (e) { last = e; console.log("attempt", i, e.message); } }
  throw new Error(`gave up: ${last.message}`);
}
console.log(retry(flaky(2), 5));
try { retry(flaky(9), 2); } catch (e) { console.log(e.message); }
const attempt = (f, d) => { try { return f(); } catch { return d; } };
console.log(attempt(() => JSON.parse("[1]"), []), attempt(() => JSON.parse("oops"), "fallback"));
