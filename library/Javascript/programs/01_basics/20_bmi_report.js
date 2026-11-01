// A small report: BMI categories for a table of people.
const people = [["Ann", 1.62, 55], ["Bob", 1.8, 95], ["Cid", 1.75, 70], ["Dot", 1.55, 42], ["Eve", 1.7, 110]];
const category = (b) => (b < 18.5 ? "under" : b < 25 ? "normal" : b < 30 ? "over" : "obese");
const rows = people.map(([name, h, w]) => ({ name, bmi: w / (h * h) }));
for (const { name, bmi } of rows) console.log(name.padEnd(4), bmi.toFixed(1).padStart(5), category(bmi));
const groups = {};
for (const r of rows) (groups[category(r.bmi)] ??= []).push(r.name);
console.log(groups);
console.log("mean", (rows.reduce((s, r) => s + r.bmi, 0) / rows.length).toFixed(3));
