// Word counts, averages and longest words from a passage.
const text = `It is a truth universally acknowledged, that a single man in possession
of a good fortune, must be in want of a wife. However little known the feelings
or views of such a man may be on his first entering a neighbourhood.`;
const words = text.toLowerCase().match(/[a-z']+/g);
const freq = new Map(); words.forEach((w) => freq.set(w, (freq.get(w) || 0) + 1));
console.log(words.length, freq.size, text.split("\n").length, text.length, (words.join("").length / words.length).toFixed(2));
console.log([...freq].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)).slice(0, 5), [...words].sort((a, b) => b.length - a.length || (a < b ? -1 : 1))[0]);
console.log(text.split(/[.!?]\s*/).filter(Boolean).map((s) => s.split(/\s+/).length));
