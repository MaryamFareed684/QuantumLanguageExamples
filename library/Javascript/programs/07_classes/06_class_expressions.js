// Class expressions, computed members and generators in classes.
const mk = (n) => class { static name2 = n; hi() { return "hi " + n; } };
const A = mk("a"), B = class Named { who() { return Named.name; } };
console.log(new A().hi(), A.name2, A.name, B.name, new B().who(), typeof Named);
const m = "dyn";
class C {
  [m + "Method"]() { return 1; }
  static [m + "Static"]() { return 2; }
  *[Symbol.iterator]() { yield 1; yield 2; }
  async later() { return 3; }
  get [m]() { return 4; }
  "quoted name"() { return 5; }
  7() { return 7; }
}
const c = new C();
console.log(c.dynMethod(), C.dynStatic(), [...c], c.dyn, c["quoted name"](), c[7](), Object.getOwnPropertyNames(C.prototype));
