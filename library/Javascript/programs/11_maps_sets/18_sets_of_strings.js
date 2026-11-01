// Sets for spelling checks, pangrams and shared letters.
const dict = new Set("the quick brown fox jumps over a lazy dog".split(" "));
console.log("the quik brown foxx".split(" ").filter((w) => !dict.has(w)));
const pangram = (s) => new Set(s.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
console.log(pangram("The quick brown fox jumps over the lazy dog"), pangram("Hello"));
const common = (...ws) => [...new Set(ws[0])].filter((c) => ws.every((w) => w.includes(c))).sort().join("");
console.log(common("listen", "silent", "tinsel"), common("abc", "xyz") === "");
const firstRepeat = (s) => { const t = new Set(); for (const c of s) { if (t.has(c)) return c; t.add(c); } return null; };
console.log(firstRepeat("abcdeb"), firstRepeat("abc"));
