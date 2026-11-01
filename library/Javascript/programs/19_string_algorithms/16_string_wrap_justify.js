// Full justification of text.
const words = "This is an example of text justification with several words per line.".split(" ");
function just(ws, W) { const o = []; let i = 0; while (i < ws.length) { let j = i, l = 0; while (j < ws.length && l + ws[j].length + (j - i) <= W) l += ws[j++].length; const g = j - i - 1; let line; if (j === ws.length || !g) line = ws.slice(i, j).join(" ").padEnd(W); else { const sp = Math.floor((W - l) / g), ex = (W - l) % g; line = ws.slice(i, j).reduce((s, w, k) => s + (k ? " ".repeat(sp + (k <= ex ? 1 : 0)) : "") + w, ""); } o.push(line); i = j; } return o; }
for (const l of just(words, 16)) console.log("|" + l + "|");
for (const l of just(["ok"], 5)) console.log("|" + l + "|");
