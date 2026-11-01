// Counting characters, lines, Unicode classes in text.
const t = "Héllo Wörld! 123 — ¿qué tal?\nSecond line\ttabbed.\n\nFourth 😀 line";
const classes = { upper: /\p{Lu}/gu, lower: /\p{Ll}/gu, digit: /\p{Nd}/gu, space: /\s/g, punct: /\p{P}/gu, emoji: /\p{Emoji_Presentation}/gu, latin: /\p{Script=Latin}/gu };
console.log(Object.fromEntries(Object.entries(classes).map(([k, r]) => [k, (t.match(r) || []).length])));
console.log(t.length, [...t].length, Buffer.byteLength(t), t.split("\n").map((l) => l.length), t.split(/\s+/).length);
console.log(t.split("\n")[0].toUpperCase(), t.split("\n")[0].normalize("NFD").replace(/\p{M}/gu, ""), t.trimEnd().at(-1), t.codePointAt(t.indexOf("😀")).toString(16));
