// Roman numerals both ways, and number words.
const table = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
const roman = (n) => table.reduce((o, [v, s]) => { while (n >= v) { o += s; n -= v; } return o; }, "");
const unroman = (s) => [...s].reduce((t, c, i) => { const v = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }, a = v[c], b = v[s[i + 1]] || 0; return t + (a < b ? -a : a); }, 0);
for (const n of [4, 9, 14, 40, 90, 400, 1994, 2024, 3999]) console.log(n, roman(n), unroman(roman(n)));
const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const words = (n) => n < 20 ? ones[n] : n < 100 ? tens[n / 10 | 0] + (n % 10 ? "-" + ones[n % 10] : "") : n < 1000 ? ones[n / 100 | 0] + " hundred" + (n % 100 ? " and " + words(n % 100) : "") : words(n / 1000 | 0) + " thousand" + (n % 1000 ? " " + words(n % 1000) : "");
console.log(words(7), words(42), words(319), words(12345));
