// Acronyms, initials and word statistics.
const phrases = ["portable network graphics", "As soon as possible", "first in, first out"];
for (const p of phrases) console.log(p.split(/[\s,]+/).map((w) => w[0].toUpperCase()).join(""));
const s = "the rain in spain stays mainly in the plain";
const words = s.split(" ");
const lengths = words.map((w) => w.length);
console.log(lengths, Math.max(...lengths), words.find((w) => w.length === Math.max(...lengths)));
console.log(words.filter((w) => w.includes("ain")), [...new Set(words)].length);
console.log(words.map((w) => w.split("").reverse().join("")).join(" "));
