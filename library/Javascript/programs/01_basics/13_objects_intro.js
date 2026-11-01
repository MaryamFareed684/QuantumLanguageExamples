// Object literals: properties, methods, shorthand and iteration.
const x = 3, y = 4;
const point = {
  x, y,
  label: "P",
  "two words": true,
  ["computed" + 1]: "yes",
  length() { return Math.hypot(this.x, this.y); },
};
console.log(point);
console.log(point.x, point["y"], point["two words"], point.computed1, point.length());
point.z = 5;
delete point.label;
console.log(Object.keys(point), "z" in point, "label" in point, point.nope);
for (const key in point) if (typeof point[key] !== "function") console.log(key, point[key]);
console.log(JSON.stringify(point), Object.entries({ a: 1, b: [2] }));
