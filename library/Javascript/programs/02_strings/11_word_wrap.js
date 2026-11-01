// Wrapping a paragraph to a width, and centering it.
const text = "The quick brown fox jumps over the lazy dog and keeps running through the forest until night falls";
function wrap(t, width) {
  const lines = [];
  let line = "";
  for (const w of t.split(" ")) {
    if (line && (line + " " + w).length > width) { lines.push(line); line = w; }
    else line = line ? line + " " + w : w;
  }
  if (line) lines.push(line);
  return lines;
}
const center = (s, w) => " ".repeat(Math.floor((w - s.length) / 2)) + s;
for (const l of wrap(text, 30)) console.log("|" + l.padEnd(30) + "|");
for (const l of wrap(text, 24)) console.log(center(l, 24));
