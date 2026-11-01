// Classes: constructor, methods, fields and instanceof.
class Point {
  z = 0;
  constructor(x, y) { this.x = x; this.y = y; }
  dist(o) { return Math.hypot(this.x - o.x, this.y - o.y); }
  toString() { return `(${this.x}, ${this.y})`; }
}
const p = new Point(3, 4);
console.log(p, `${p}`, p.dist(new Point(0, 0)), p instanceof Point, typeof Point, Object.keys(p));
console.log(Point.name, Point.length, p.constructor === Point, Object.getOwnPropertyNames(Point.prototype), p.hasOwnProperty("dist"));
try { Point(1, 2); } catch (e) { console.log(e.name + ": " + e.message); }
console.log(typeof Point.prototype.dist, Object.keys(Point.prototype));
