// UTF-16 lengths, code points, and spreading strings.
const s = "héllo wörld 日本語 😀";
console.log(s.length, [...s].length, s.toUpperCase());
console.log("😀".length, "😀".charCodeAt(0), "😀".codePointAt(0), String.fromCodePoint(128512), "\u{1F600}" === "😀", "\u0041");
console.log([..."a😀b"], "a😀b".split(""), Array.from("日本"));
console.log("é".normalize("NFD").length, "e\u0301".normalize("NFC").length, "é" === "e\u0301");
console.log(encodeURIComponent("a b&c/d é"), decodeURIComponent("a%20b%C3%A9"), encodeURI("http://x.y/a b?q=é"), escape ? "has escape" : "");
console.log("ß".toUpperCase(), "İ".length, "Σ".toLowerCase(), "abc" < "abd", "Z" < "a", "é" > "z", "a".localeCompare("b"), "b".localeCompare("a"), "a".localeCompare("a"));
