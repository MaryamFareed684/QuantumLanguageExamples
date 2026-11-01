// Accessors in classes with validation.
class Circle {
  #r;
  constructor(r) { this.radius = r; }
  get radius() { return this.#r; }
  set radius(v) { if (!(v > 0)) throw new TypeError(`bad radius ${v}`); this.#r = v; }
  get area() { return +(Math.PI * this.#r ** 2).toFixed(3); }
  static unit() { return new Circle(1); }
}
const c = new Circle(2);
c.radius = 3;
console.log(c.radius, c.area, c, Object.keys(c), Circle.unit().area);
try { c.radius = -1; } catch (e) { console.log(e.message); }
c.area = 1; console.log(c.area);
console.log(Object.getOwnPropertyDescriptor(Circle.prototype, "area").set, typeof Object.getOwnPropertyDescriptor(Circle.prototype, "radius").get);
