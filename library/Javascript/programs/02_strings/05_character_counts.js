// Letter frequencies, vowels and most common characters.
const text = "It was the best of times, it was the worst of times";
const freq = {};
for (const ch of text.toLowerCase()) if (/[a-z]/.test(ch)) freq[ch] = (freq[ch] || 0) + 1;
const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
console.log(sorted.slice(0, 5));
console.log("vowels:", [...text].filter((c) => "aeiouAEIOU".includes(c)).length);
const bar = sorted.slice(0, 4).map(([c, n]) => `${c} ${"#".repeat(n)}`);
console.log(bar.join("\n"));
console.log(Object.keys(freq).length, "distinct letters");
