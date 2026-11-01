// match, matchAll and replace callbacks with state.
const t = "x=1, y=22, z=333";
console.log(t.match(/\w=\d+/g), t.match(/\w=\d+/), [...t.matchAll(/(\w)=(\d+)/g)].map((m) => [m[1], +m[2], m.index]), Object.fromEntries([...t.matchAll(/(\w)=(\d+)/g)].map((m) => m.slice(1))));
try { "a".matchAll(/a/); } catch (e) { console.log(e.name, e.message); } try { "a".replaceAll(/a/, "b"); } catch (e) { console.log(e.name, e.message); }
let n = 0; console.log(t.replace(/\d+/g, (d) => `[${++n}:${d}]`), t.replace(/(\w)=(\d+)/g, (m, k, v, off, str) => `${k.toUpperCase()}@${off}/${str.length}`), "aaa".replaceAll("a", (m, off) => off), "a.b.c".replaceAll(".", "$&$&"), "aaa".replaceAll(/a/g, "b"));
const r = /a/g; r.lastIndex = 5; console.log("aaa".match(r), r.lastIndex, "aaa".replace(r, "b"), "abc".search(/c/), "abc".search(/z/), "x".match(/(y)?/), "".match(/^/));
