// A shape hierarchy printing a table of areas.
class Shape { constructor(n) { this.n = n; } area() { return 0; } describe() { return `${this.n.padEnd(8)}${this.area().toFixed(2).padStart(8)}`; } }
class Sq extends Shape { constructor(s) { super("square"); this.s = s; } area() { return this.s ** 2; } }
class Ci extends Shape { constructor(r) { super("circle"); this.r = r; } area() { return Math.PI * this.r ** 2; } }
class Tr extends Shape { constructor(b, h) { super("triangle"); Object.assign(this, { b, h }); } area() { return (this.b * this.h) / 2; } }
const shapes = [new Sq(2), new Ci(1.5), new Tr(3, 4)];
shapes.sort((a, b) => a.area() - b.area()).forEach((s) => console.log(s.describe()));
console.log(shapes.reduce((t, s) => t + s.area(), 0).toFixed(3), shapes, shapes.map((s) => s.constructor.name));
