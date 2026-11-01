// Unicode property escapes and the u and v flags.
console.log("Ünï çødé 123 日本語 😀".match(/\p{L}+/gu), "a😀b".match(/./gu).length, "a😀b".match(/./g).length, /^.$/u.test("😀"), /^.$/.test("😀"), /\u{1F600}/u.test("😀"), /\p{Script=Han}/u.test("日"), /\p{Lu}/u.test("É"), /\P{Lu}/u.test("É"));
console.log("😀 fine 🎉".replace(/\p{Extended_Pictographic}/gu, "*"), "Crème".normalize("NFD").replace(/\p{Mn}/gu, ""), "ÀÉ".toLowerCase(), /é/i.test("É"), /[à-ÿ]/i.test("É"), /\w/u.test("é"), /[\p{L}\d]+/u.exec("héllo1 x")[0]);
try { new RegExp("\\p{Nope}", "u"); } catch (e) { console.log(e.name); } try { new RegExp("\\-", "u"); } catch (e) { console.log(e.name); }
console.log(/a/v.flags, /[\p{L}--[a-z]]/v.test("a"), /[\p{L}--[a-z]]/v.test("A"), /[[a-z]&&[aeiou]]/v.test("b"), /a/d.exec("xa").indices[0], /(?<n>a)/d.exec("a").indices.groups.n, /a/.hasIndices);
