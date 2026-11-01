// Accounts, transfers and a ledger with custom errors.
class Insufficient extends Error { constructor(need) { super(`need ${need} more`); this.name = "Insufficient"; this.need = need; } }
class Bank {
  accounts = new Map(); ledger = [];
  open(id, amt = 0) { this.accounts.set(id, amt); return this; }
  transfer(a, b, n) {
    const have = this.accounts.get(a);
    if (have < n) throw new Insufficient(n - have);
    this.accounts.set(a, have - n); this.accounts.set(b, this.accounts.get(b) + n);
    this.ledger.push({ a, b, n });
  }
}
const k = new Bank().open("x", 100).open("y");
k.transfer("x", "y", 30);
try { k.transfer("y", "x", 50); } catch (e) { console.log(e.name, e.message, e.need, e instanceof Insufficient, e instanceof Error); }
console.log(k, [...k.accounts.values()]);
