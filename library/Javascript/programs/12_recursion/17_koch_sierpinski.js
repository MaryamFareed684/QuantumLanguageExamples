// Fractals in text: Sierpinski, Koch lengths, Cantor set.
const sier = (n) => (n === 0 ? ["*"] : ((s) => [...s.map((l) => " ".repeat(2 ** (n - 1)) + l + " ".repeat(2 ** (n - 1))), ...s.map((l) => l + " " + l)])(sier(n - 1)));
console.log(sier(3).join("\n"));
const cantor = (n) => (n === 0 ? "#" : ((s) => s + " ".repeat(s.length) + s)(cantor(n - 1)));
for (let i = 0; i < 4; i++) console.log(cantor(i).padEnd(27));
const koch = (n) => 3 * (4 / 3) ** n; console.log([0, 1, 2, 5].map(koch));
