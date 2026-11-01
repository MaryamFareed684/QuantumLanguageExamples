// Constructor order and shared defaults across levels.
const log = [];
class A { constructor(x = "ax") { this.x = x; log.push("A" + this.describe()); } describe() { return "a"; } }
class B extends A { y = "by"; constructor(...r) { super(...r); log.push("B" + this.describe()); } describe() { return this.y ?? "no y yet"; } }
class C extends B { constructor() { super("cx"); this.z = "cz"; log.push("C"); } }
console.log(new C(), log);
class Def { items = []; static shared = []; add(v) { this.items.push(v); Def.shared.push(v); return this; } }
console.log(new Def().add(1).items, new Def().add(2).items, Def.shared);
