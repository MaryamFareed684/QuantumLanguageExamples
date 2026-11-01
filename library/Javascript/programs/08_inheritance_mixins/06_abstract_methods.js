// Abstract-style classes checked with new.target.
class Abstract {
  constructor() { if (new.target === Abstract) throw new TypeError("abstract"); }
  run() { return `${this.name()} ran`; }
  name() { throw new Error(`${this.constructor.name} must implement name`); }
}
class Good extends Abstract { name() { return "good"; } }
class Bad extends Abstract {}
try { new Abstract(); } catch (e) { console.log(e.message); }
console.log(new Good().run());
try { new Bad().run(); } catch (e) { console.log(e.message); }
