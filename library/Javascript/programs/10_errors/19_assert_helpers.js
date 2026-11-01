// A miniature test framework counting passes and failures.
const results = { pass: 0, fail: 0, errors: [] };
function test(name, f) { try { f(); results.pass++; } catch (e) { results.fail++; results.errors.push(`${name}: ${e.message}`); } }
const expect = (v) => ({
  toBe(o) { if (!Object.is(v, o)) throw new Error(`expected ${o}, got ${v}`); },
  toEqual(o) { if (JSON.stringify(v) !== JSON.stringify(o)) throw new Error(`expected ${JSON.stringify(o)}, got ${JSON.stringify(v)}`); },
  toThrow(T) { try { v(); } catch (e) { if (e instanceof T) return; throw new Error("wrong error " + e.name); } throw new Error("did not throw"); },
});
test("add", () => expect(1 + 1).toBe(2));
test("nan", () => expect(NaN).toBe(NaN));
test("zero", () => expect(0).toBe(-0));
test("arr", () => expect([1, 2].map((x) => x * 2)).toEqual([2, 4]));
test("bad", () => expect({ a: 1 }).toEqual({ a: 2 }));
test("thr", () => expect(() => null.x).toThrow(TypeError));
test("thr2", () => expect(() => 1).toThrow(Error));
test("thr3", () => expect(() => null.x).toThrow(RangeError));
console.log(results);
