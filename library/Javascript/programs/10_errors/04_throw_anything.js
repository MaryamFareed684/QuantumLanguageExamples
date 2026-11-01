// Anything can be thrown; catching by shape.
for (const v of [1, "str", null, undefined, { code: 5 }, [1, 2], true, () => 1, Symbol.for("s")]) {
  try { throw v; } catch (e) { console.log(typeof e, e === v, e?.code ?? "no code"); }
}
try { throw { name: "Fake", message: "not error" }; } catch ({ name, message }) { console.log(name, message); }
try { throw 1; } catch { console.log("optional binding"); }
const e = "outer"; try { throw "inner"; } catch (e) { console.log(e); } console.log(e);
