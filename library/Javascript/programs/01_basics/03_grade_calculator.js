// Letter grades from numeric scores, with a class summary.
const scores = { Amy: 91, Ben: 78, Cal: 65, Dee: 84, Eli: 52, Fay: 100 };
function letter(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
const counts = {};
for (const [student, score] of Object.entries(scores)) {
  const grade = letter(score);
  counts[grade] = (counts[grade] || 0) + 1;
  console.log(`${student.padEnd(5)}${String(score).padStart(4)}  ${grade}`);
}
const all = Object.values(scores);
console.log("Average:", (all.reduce((a, b) => a + b, 0) / all.length).toFixed(2));
console.log("Highest:", Math.max(...all), "Lowest:", Math.min(...all));
console.log(counts);
