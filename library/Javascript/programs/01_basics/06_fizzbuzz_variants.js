// FizzBuzz three ways: if chain, ternary and a rule table.
function classic(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 5 === 0) return "Buzz";
  if (n % 3 === 0) return "Fizz";
  return n;
}
const ternary = (n) => (n % 15 ? (n % 5 ? (n % 3 ? n : "Fizz") : "Buzz") : "FizzBuzz");
const rules = [[3, "Fizz"], [5, "Buzz"], [7, "Bazz"]];
const table = (n) => rules.filter(([d]) => n % d === 0).map(([, w]) => w).join("") || n;
const list = (f, n) => Array.from({ length: n }, (_, i) => f(i + 1)).join(" ");
console.log(list(classic, 20));
console.log(list(ternary, 20));
console.log(list(table, 35));
