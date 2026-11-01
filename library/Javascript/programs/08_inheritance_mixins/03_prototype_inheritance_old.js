// Pre-class inheritance with constructor functions.
function Shape(n) { this.n = n; }
Shape.prototype.area = function () { return 0; };
Shape.prototype.toString = function () { return `${this.n}: ${this.area()}`; };
function Sq(s) { Shape.call(this, "sq"); this.s = s; }
Sq.prototype = Object.create(Shape.prototype);
Sq.prototype.constructor = Sq;
Sq.prototype.area = function () { return this.s ** 2; };
const q = new Sq(3);
console.log(String(q), q, q instanceof Shape, Object.keys(q), Sq.prototype.constructor.name, Shape.prototype.isPrototypeOf(q));
for (const k in q) console.log(k);
