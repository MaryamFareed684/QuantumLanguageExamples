// The module pattern with an IIFE and revealed API.
const bank = (function () {
  let balance = 0;
  const log = [];
  function record(kind, amt) { log.push(`${kind}:${amt}`); }
  return {
    deposit(a) { balance += a; record("in", a); return this; },
    withdraw(a) { if (a > balance) throw new RangeError("insufficient funds"); balance -= a; record("out", a); return this; },
    get balance() { return balance; },
    history: () => [...log],
  };
})();
bank.deposit(50).withdraw(20);
console.log(bank.balance, bank.history(), bank.log);
try { bank.withdraw(100); } catch (e) { console.log(e.name, e.message); }
console.log(bank);
