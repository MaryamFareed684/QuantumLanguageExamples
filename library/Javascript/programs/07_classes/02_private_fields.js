// #private fields and methods, and the in check.
class Account {
  #balance = 0;
  static #count = 0;
  constructor(o) { this.owner = o; Account.#count++; }
  #check(a) { if (a <= 0) throw new RangeError("bad amount"); }
  deposit(a) { this.#check(a); this.#balance += a; return this; }
  get balance() { return this.#balance; }
  static get count() { return Account.#count; }
  static isAccount(x) { return #balance in x; }
}
const a = new Account("Ann").deposit(10);
console.log(a, a.balance, a["#balance"], Object.keys(a), Account.count, Account.isAccount(a), Account.isAccount({}), JSON.stringify(a));
try { a.deposit(-1); } catch (e) { console.log(e.name, e.message); }
