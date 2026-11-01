// new semantics: returning objects, prototypes and function constructors.
function Old(n) { this.n = n; }
Old.prototype.hi = function () { return "hi " + this.n; };
Old.make = (n) => new Old(n);
console.log(new Old(1), new Old(2).hi(), Old.make(3) instanceof Old, Object.keys(new Old(1)), typeof Old.prototype.hi);
function Ret() { this.a = 1; return { b: 2 }; } function Prim() { this.a = 1; return 5; }
console.log(new Ret(), new Prim());
function Safe(x) { if (!new.target) return new Safe(x); this.x = x; }
console.log(Safe(1), new Safe(2));
class K { constructor() { return Object.create(null); } } console.log(new K() instanceof K);
const manual = Object.create(Old.prototype); Old.call(manual, 9); console.log(manual.hi(), manual);
