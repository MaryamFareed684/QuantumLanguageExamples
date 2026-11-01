// A multiplication table with aligned columns.
const size = 9;
let header = "   |";
for (let i = 1; i <= size; i++) header += String(i).padStart(4);
console.log(header);
console.log("-".repeat(header.length));
for (let row = 1; row <= size; row++) {
  let line = String(row).padStart(2) + " |";
  for (let col = 1; col <= size; col++) line += String(row * col).padStart(4);
  console.log(line);
}
