// A Celsius to Fahrenheit and Kelvin conversion table.
const toFahrenheit = (c) => (c * 9) / 5 + 32;
const toKelvin = (c) => c + 273.15;
console.log("Celsius  Fahrenheit  Kelvin");
console.log("-".repeat(28));
for (let c = -40; c <= 100; c += 20) {
  const row = [String(c).padStart(7), toFahrenheit(c).toFixed(1).padStart(10), toKelvin(c).toFixed(2).padStart(7)];
  console.log(row.join("  "));
}
