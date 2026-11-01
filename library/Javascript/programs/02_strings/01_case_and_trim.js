// Case conversion, trimming and padding.
const s = "  Hello, World!  ";
console.log(`[${s.trim()}] [${s.trimStart()}] [${s.trimEnd()}]`);
console.log(s.toUpperCase(), s.toLowerCase());
console.log("abc".padStart(6, "*"), "abc".padEnd(6, "-") + "|", "abc".padStart(2), "abc".padStart(8, "12"));
const title = (t) => t.split(" ").map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ");
console.log(title("the qUICK brown fOX"));
const swap = (t) => [...t].map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("");
console.log(swap("Hello World 123"));
const camel = (t) => t.replace(/[-_ ](\w)/g, (_, c) => c.toUpperCase());
const snake = (t) => t.replace(/[A-Z]/g, (c) => "_" + c.toLowerCase());
console.log(camel("make-this_camel case"), snake("makeThisSnakeCase"));
