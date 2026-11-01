// Triangles, diamonds and hollow boxes in text.
function triangle(n) { for (let i = 1; i <= n; i++) console.log("*".repeat(i)); }
function diamond(n) {
  for (let i = 1; i <= n; i += 2) console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
  for (let i = n - 2; i >= 1; i -= 2) console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
}
function box(w, h) {
  console.log("#".repeat(w));
  for (let i = 0; i < h - 2; i++) console.log("#" + " ".repeat(w - 2) + "#");
  console.log("#".repeat(w));
}
triangle(4); diamond(7); box(8, 4);
