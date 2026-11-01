// Leap years in a range, by the Gregorian rule.
const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
const years = [];
for (let y = 1890; y <= 1930; y++) if (isLeap(y)) years.push(y);
console.log(years.join(" "));
for (const y of [1600, 1700, 1900, 2000, 2023, 2024, 2100]) {
  console.log(y, isLeap(y) ? "is a leap year" : "is not a leap year");
}
