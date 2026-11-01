// test, exec, flags, lastIndex and RegExp properties.
const r = /ab+c/gi;
console.log(r.source, r.flags, r.global, r.ignoreCase, r.multiline, r.sticky, r.unicode, r.dotAll, r.lastIndex, String(r), r, typeof r);
console.log(/a/.test("cat"), /A/.test("cat"), /A/i.test("cat"), /^c/.test("cat"), /t$/.test("cat"), /^$/.test(""));
const g = /o/g; console.log(g.test("foo"), g.lastIndex, g.test("foo"), g.lastIndex, g.test("foo"), g.lastIndex);
const m = /(\d+)-(\d+)/.exec("tel 555-1234 end"); console.log(m, m[0], m[1], m.index, m.input, m.length, /x/.exec("y"));
const it = /\d/g; let x; while ((x = it.exec("a1b2c3"))) console.log(x[0], x.index, it.lastIndex);
const s = /foo/y; s.lastIndex = 3; console.log(s.test("barfoo"), s.lastIndex, s.test("barfoo"), s.lastIndex);
console.log(new RegExp("a+", "g").flags, new RegExp(/x/g).flags, new RegExp(/x/g, "i").flags, RegExp("\\d").source, new RegExp("/").source, new RegExp("").source, /[/]/.source);
