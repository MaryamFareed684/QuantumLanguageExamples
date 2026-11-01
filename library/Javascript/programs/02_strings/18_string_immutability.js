// Strings are values: indexing, immutability and wrapper objects.
"use strict";
const s = "hello";
try { s[0] = "J"; } catch (e) { console.log(e.name, e.message); }
console.log(s, s.length, typeof s, typeof new String(s), new String(s) == s, new String(s) === s);
let t = s;
t += " world";
console.log(s, t);
console.log(new String("a"), Object("b") instanceof String, "x".constructor === String);
console.log(String.prototype.hasOwnProperty("trim"), "abc".hasOwnProperty(1), "abc".hasOwnProperty("length"), Object.keys("ab"));
String.prototype.shout = function () { return this.toUpperCase() + "!"; };
console.log("hey".shout());
delete String.prototype.shout;
